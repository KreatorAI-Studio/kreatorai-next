"use client";

import { ReactNode } from "react";

export interface LegalTocItem {
  id: string;
  label: string;
}

export default function LegalLayout({
  kicker,
  title,
  intro,
  effectiveDate,
  lastUpdated,
  toc,
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro: string;
  effectiveDate: string;
  lastUpdated: string;
  toc: LegalTocItem[];
  children: ReactNode;
}) {
  return (
    <>
      <div className="page-hero">
        <div style={{ justifyContent: "center", display: "inline-flex" }} className="kicker">
          {kicker}
        </div>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="legal-meta">
          Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated: {lastUpdated}
        </div>
      </div>

      <div className="legal-shell">
        <nav className="legal-toc">
          <div className="lt-label">On this page</div>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-body">{children}</div>
      </div>
    </>
  );
}
