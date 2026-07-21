"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kai_cookie_consent";

type ConsentState = {
  functional: boolean;
  analytics: boolean;
  timestamp: string;
};

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing etc) — consent just won't persist
  }
  // Let the rest of the app react to consent changes (e.g. gate analytics init)
  window.dispatchEvent(new CustomEvent("kai-cookie-consent-changed", { detail: state }));
}

function Toggle({
  on,
  disabled,
  onClick,
}: {
  on: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={disabled ? undefined : onClick}
      className={`cc-toggle ${on ? "on" : ""} ${disabled ? "disabled" : ""}`}
    >
      <span className="knob" />
    </button>
  );
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setShowBanner(true);
    } else {
      setFunctional(existing.functional);
      setAnalytics(existing.analytics);
    }

    // Let the "Manage Cookie Preferences" button on /cookies (and anywhere
    // else) reopen this modal without needing prop-drilling across the tree.
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.id === "cc-reopen-btn" || target?.closest?.("#cc-reopen-btn")) {
        const current = readConsent();
        if (current) {
          setFunctional(current.functional);
          setAnalytics(current.analytics);
        }
        setShowModal(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const acceptAll = () => {
    writeConsent({ functional: true, analytics: true, timestamp: new Date().toISOString() });
    setFunctional(true);
    setAnalytics(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectNonEssential = () => {
    writeConsent({ functional: false, analytics: false, timestamp: new Date().toISOString() });
    setFunctional(false);
    setAnalytics(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const savePreferences = () => {
    writeConsent({ functional, analytics, timestamp: new Date().toISOString() });
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {showBanner && !showModal && (
        <div className="cc-banner" role="dialog" aria-label="Cookie consent">
          <h4>We use cookies</h4>
          <p>
            Essential cookies keep KreatorAI working. With your permission, we&rsquo;d also like to use
            functional and analytics cookies to improve your experience. See our{" "}
            <a href="/cookies">Cookie Policy</a> for details.
          </p>
          <div className="cc-actions">
            <button className="cc-btn reject" onClick={rejectNonEssential}>
              Reject
            </button>
            <button className="cc-btn manage" onClick={() => setShowModal(true)}>
              Manage
            </button>
            <button className="cc-btn accept" onClick={acceptAll}>
              Accept All
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="cc-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="cc-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Cookie Preferences</h3>
            <p>Choose which categories of cookies you&rsquo;re okay with. Essential cookies can&rsquo;t be turned off — the app won&rsquo;t work correctly without them.</p>

            <div className="cc-row">
              <div>
                <div className="cc-row-t">Essential</div>
                <div className="cc-row-d">Required for login, security, and core functionality.</div>
              </div>
              <Toggle on disabled />
            </div>

            <div className="cc-row">
              <div>
                <div className="cc-row-t">Functional</div>
                <div className="cc-row-d">Remembers your preferences, like Brand Kit and UI settings.</div>
              </div>
              <Toggle on={functional} onClick={() => setFunctional((v) => !v)} />
            </div>

            <div className="cc-row">
              <div>
                <div className="cc-row-t">Analytics</div>
                <div className="cc-row-d">Helps us understand usage patterns to improve the product.</div>
              </div>
              <Toggle on={analytics} onClick={() => setAnalytics((v) => !v)} />
            </div>

            <div className="cc-modal-actions">
              <button className="cc-btn reject" onClick={rejectNonEssential} style={{ flex: 1 }}>
                Reject All
              </button>
              <button className="cc-btn accept" onClick={savePreferences} style={{ flex: 1 }}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
