"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DISMISSED_KEY = "kai_dismissed_announcement_id";
const POLL_INTERVAL_MS = 60_000; // re-check every 60s so a new announcement shows without a page reload

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

type Severity = "info" | "warning" | "critical";

interface Announcement {
  id: string;
  message: string;
  severity: Severity;
}

const SEVERITY_STYLES: Record<Severity, { bg: string; border: string; text: string }> = {
  info: { bg: "rgba(124,77,255,.14)", border: "rgba(124,77,255,.35)", text: "#d0baff" },
  warning: { bg: "rgba(245,158,11,.14)", border: "rgba(245,158,11,.35)", text: "#fcd34d" },
  critical: { bg: "rgba(239,68,68,.14)", border: "rgba(239,68,68,.4)", text: "#fca5a5" },
};

function readDismissedId(): string | null {
  try {
    return window.localStorage.getItem(DISMISSED_KEY);
  } catch {
    return null;
  }
}

function writeDismissedId(id: string) {
  try {
    window.localStorage.setItem(DISMISSED_KEY, id);
  } catch {
    // localStorage unavailable — banner will just reappear next load, not a big deal
  }
}

export default function StatusBanner() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const fetchAnnouncement = useCallback(async () => {
    if (!API_BASE) return; // not configured yet — fail silently, don't break the site
    try {
      const res = await fetch(`${API_BASE}/public/announcements/active?surface=website`, {
        cache: "no-store",
      });
      if (!res.ok) return;
      const data = await res.json();
      const active: Announcement | undefined = data.announcements?.[0];
      if (!active) {
        setAnnouncement(null);
        return;
      }
      if (readDismissedId() === active.id) {
        setAnnouncement(null);
        return;
      }
      setAnnouncement(active);
    } catch {
      // network hiccup — just don't show a banner this cycle, try again next poll
    }
  }, []);

  useEffect(() => {
    fetchAnnouncement();
    const interval = setInterval(fetchAnnouncement, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchAnnouncement]);

  // Measure the banner's real height (message length varies) and push the
  // fixed navbar + page content down by exactly that much, instead of a
  // hardcoded guess that breaks on longer messages or narrow screens.
  useEffect(() => {
    const root = document.documentElement;
    if (!announcement) {
      root.style.setProperty("--banner-h", "0px");
      document.body.classList.remove("has-banner");
      return;
    }
    document.body.classList.add("has-banner");
    const el = bannerRef.current;
    if (!el) return;

    const setHeight = () => root.style.setProperty("--banner-h", `${el.offsetHeight}px`);
    setHeight();

    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [announcement]);

  if (!announcement) return null;

  const style = SEVERITY_STYLES[announcement.severity];

  return (
    <div
      ref={bannerRef}
      className="status-banner"
      role="status"
      style={{ background: style.bg, borderBottom: `1px solid ${style.border}`, color: style.text }}
    >
      <p className="status-banner-text">{announcement.message}</p>
      <button
        className="status-banner-close"
        aria-label="Dismiss"
        onClick={() => {
          writeDismissedId(announcement.id);
          setAnnouncement(null);
        }}
      >
        ✕
      </button>
    </div>
  );
}
