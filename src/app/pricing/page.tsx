"use client";
import { useState } from "react";
import Link from "next/link";
import CreditCalculator from "@/components/CreditCalculator";

// ── Plan definitions (credit-based, USD) ─────────────────────────────────────
const plans = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnual: 0,
    credits: 25,
    feat: false,
    desc: "Try KreatorAI with a taste of every tool.",
    items: [
      "25 credits / month",
      "1 lifetime project (free)",
      "All text generators",
      "All AI tools (credit-gated)",
    ],
    no: ["AI Video Generation", "Priority Support"],
    cta: "Get Started Free",
    ctaLink: "https://app.kreatoraistudio.com",
    ctaClass: "pbtn-o",
    accent: "#8A8AA0",
    badge: null,
  },
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 29,
    priceAnnual: 290,
    credits: 250,
    feat: true,
    badge: "🔥 Most Popular",
    desc: "For growing creators who need more creative firepower.",
    items: [
      "250 credits / month",
      "Unlimited projects (100 credits each)",
      "All text generators",
      "AI Image Generation",
      "Background Removal & Editing",
      "Text-to-Speech & Captions",
    ],
    no: [] as string[],
    cta: "Upgrade to Starter",
    ctaLink: "https://app.kreatoraistudio.com",
    ctaClass: "pbtn-f",
    accent: "#7C5CFC",
  },
  {
    id: "max",
    name: "Max",
    priceMonthly: 89,
    priceAnnual: 890,
    credits: 800,
    feat: false,
    badge: "⚡ Best Value",
    desc: "For serious creators who publish every day.",
    items: [
      "800 credits / month",
      "Unlimited projects (100 credits each)",
      "All text & image tools",
      "AI Video Generation",
      "Text-to-Video & Img-to-Video",
      "Priority email support",
    ],
    no: [] as string[],
    cta: "Upgrade to Max",
    ctaLink: "https://app.kreatoraistudio.com",
    ctaClass: "pbtn-f",
    accent: "#F59E0B",
  },
  {
    id: "studio",
    name: "Studio",
    priceMonthly: 219,
    priceAnnual: 2190,
    credits: 2250,
    feat: false,
    badge: "🏢 Power Users",
    desc: "For studios and agencies managing content at scale.",
    items: [
      "2,250 credits / month",
      "Unlimited projects (100 credits each)",
      "Every AI tool unlocked",
      "Video-to-Video generation",
      "Background Music & Voiceovers",
      "Priority support",
    ],
    no: [] as string[],
    cta: "Upgrade to Studio",
    ctaLink: "https://app.kreatoraistudio.com",
    ctaClass: "pbtn-f",
    accent: "#06B6D4",
  },
  {
    id: "custom",
    name: "Custom",
    priceMonthly: null,
    priceAnnual: null,
    credits: 0,
    feat: false,
    badge: null,
    desc: "Tailored for agencies, brands & high-volume teams. Custom credits, SLAs, and white-glove onboarding.",
    items: [
      "Custom credit volume",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "Team seats & role management",
      "White-label output options",
      "API access & integrations",
    ],
    no: [] as string[],
    cta: "Contact Us",
    ctaLink: "mailto:business@kreatoraistudio.com?subject=Custom%20Plan%20Enquiry&body=Hi%20KreatorAI%20team%2C%0A%0AI%27m%20interested%20in%20a%20custom%20plan.%20Here%27s%20a%20bit%20about%20my%20needs%3A%0A%0A",
    ctaClass: "pbtn-o",
    accent: "#E879F9",
  }
];

// ── Action credit costs (mirrors server ACTION_COSTS exactly) ────────────────
const actionCosts: [string, number][] = [
  // ── Content tools
  ["Generate Hashtags",         4],
  ["Generate Description",      6],
  ["Generate Title",            6],
  ["Edit Guide",                8],
  ["Hook Generator",           10],
  ["Content Ideas",            10],
  ["Repurpose Content",        12],
  ["Generate Script",          12],
  ["Motion Graphics",          15],
  ["Background Music",         15],
  ["Background Removal",       18],
  ["Aspect Ratio Expansion",   18],
  ["Text to Image",            20],
  ["Thumbnail Generation",     20],
  ["Caption Generator",        22],
  ["Image-to-Image Edit",      25],
  ["Text to Speech (Std)",     25],
  ["AI Music via Suno",        30],
  ["Asset Pack",               35],
  ["TTS Premium (ElevenLabs)", 45],
  ["Text to Video",            50],
  ["Img to Video",             60],
  ["Video to Video",           70],
  ["Create Project",          100],
  // ── Studio-only heavy operations
  ["Avatar Video Standard",   200],
  ["Avatar Creation",         200],
  ["Avatar Video Pro",        350],
  ["Faceless Video",          300],
];

// ── Comparison table ──────────────────────────────────────────────────────────
const tableRows = [
  // Plan limits
  ["Credits / month",          "25",        "250",         "800",          "2,250",        "Custom"],
  ["Projects",                 "1 (free)",  "Unlimited",   "Unlimited",    "Unlimited",    "Unlimited"],
  ["Project creation cost",    "0 credits", "100 credits", "100 credits",  "100 credits",  "Custom"],
  // Content tools — all plans
  ["Script Generator",         "✓ (12 cr)", "✓ (12 cr)",   "✓ (12 cr)",    "✓ (12 cr)",    "✓ (12 cr)"],
  ["Description Generator",    "✓ (6 cr)",  "✓ (6 cr)",    "✓ (6 cr)",     "✓ (6 cr)",     "✓ (6 cr)"],
  ["Hashtag Generator",        "✓ (4 cr)",  "✓ (4 cr)",    "✓ (4 cr)",     "✓ (4 cr)",     "✓ (4 cr)"],
  ["Hook Generator",           "✓ (10 cr)", "✓ (10 cr)",   "✓ (10 cr)",    "✓ (10 cr)",    "✓ (10 cr)"],
  ["Content Ideas Engine",     "✓ (10 cr)", "✓ (10 cr)",   "✓ (10 cr)",    "✓ (10 cr)",    "✓ (10 cr)"],
  ["Repurpose Content",        "✓ (12 cr)", "✓ (12 cr)",   "✓ (12 cr)",    "✓ (12 cr)",    "✓ (12 cr)"],
  ["Edit Guide",               "✓ (8 cr)",  "✓ (8 cr)",    "✓ (8 cr)",     "✓ (8 cr)",     "✓ (8 cr)"],
  ["Generate Title",           "✓ (6 cr)",  "✓ (6 cr)",    "✓ (6 cr)",     "✓ (6 cr)",     "✓ (6 cr)"],
  // Image tools — all plans
  ["AI Image Generation",      "✓ (20 cr)", "✓ (20 cr)",   "✓ (20 cr)",    "✓ (20 cr)",    "✓ (20 cr)"],
  ["  · Image-to-Image Edit",  "✓ (25 cr)", "✓ (25 cr)",   "✓ (25 cr)",    "✓ (25 cr)",    "✓ (25 cr)"],
  ["  · Background Removal",   "✓ (18 cr)", "✓ (18 cr)",   "✓ (18 cr)",    "✓ (18 cr)",    "✓ (18 cr)"],
  ["  · Aspect Ratio Changer", "✓ (18 cr)", "✓ (18 cr)",   "✓ (18 cr)",    "✓ (18 cr)",    "✓ (18 cr)"],
  ["Thumbnail Generation",     "✓ (20 cr)", "✓ (20 cr)",   "✓ (20 cr)",    "✓ (20 cr)",    "✓ (20 cr)"],
  ["Asset Pack",               "✓ (35 cr)", "✓ (35 cr)",   "✓ (35 cr)",    "✓ (35 cr)",    "✓ (35 cr)"],
  // Audio tools — all plans
  ["Caption Generation",       "✓ (22 cr)", "✓ (22 cr)",   "✓ (22 cr)",    "✓ (22 cr)",    "✓ (22 cr)"],
  ["Text-to-Speech (Std)",     "✓ (25 cr)", "✓ (25 cr)",   "✓ (25 cr)",    "✓ (25 cr)",    "✓ (25 cr)"],
  ["TTS Premium (ElevenLabs)", "✓ (45 cr)", "✓ (45 cr)",   "✓ (45 cr)",    "✓ (45 cr)",    "✓ (45 cr)"],
  ["Background Music",         "✓ (15 cr)", "✓ (15 cr)",   "✓ (15 cr)",    "✓ (15 cr)",    "✓ (15 cr)"],
  ["AI Music via Suno",        "✓ (30 cr)", "✓ (30 cr)",   "✓ (30 cr)",    "✓ (30 cr)",    "✓ (30 cr)"],
  // Video tools — Max & Studio only
  ["Motion Graphics",          "✕",         "✕",           "✕",            "✓ (15 cr)",    "✓ (15 cr)"],
  ["AI Video Generation",      "✕",         "✕",           "✓ (50+ cr)",   "✓ (50+ cr)",   "✓ (50+ cr)"],
  ["  · Text-to-Video",        "✕",         "✕",           "✓ (50 cr)",    "✓ (50 cr)",    "✓ (50 cr)"],
  ["  · Image-to-Video",       "✕",         "✕",           "✓ (60 cr)",    "✓ (60 cr)",    "✓ (60 cr)"],
  ["  · Video-to-Video",       "✕",         "✕",           "✓ (70 cr)",    "✓ (70 cr)",    "✓ (70 cr)"],
  // Studio-only heavy operations
  ["Faceless Video",           "✕",         "✕",           "✕",            "✓ (300 cr)",   "✓ (300 cr)"],
  ["AI Avatar Videos",         "✕",         "✕",           "✕",            "✓ (200+ cr)",  "✓ (200+ cr)"],
  ["  · Avatar Video Standard","✕",         "✕",           "✕",            "✓ (200 cr)",   "✓ (200 cr)"],
  ["  · Avatar Video Pro",     "✕",         "✕",           "✕",            "✓ (350 cr)",   "✓ (350 cr)"],
  ["  · Avatar Creation",      "✕",         "✕",           "✕",            "✓ (200 cr)",   "✓ (200 cr)"],
  // Support
  ["Priority Support",         "✕",         "✕",           "✓",            "✓",            "✓"],
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <div className="page-hero">
        <div style={{ justifyContent: "center", display: "inline-flex" }} className="kicker">Pricing</div>
        <h1>Pay Per Creation.<br /><em>No Limits.</em></h1>
        <p>Credits reset monthly. Every tool unlocked from day one — use what you need.</p>
      </div>

      {/* ── BILLING CYCLE TOGGLE ── */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem", padding: "0 24px" }}>
        <div style={{
          display: "inline-flex",
          padding: "4px",
          borderRadius: "14px",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}>
          <button
            onClick={() => setIsAnnual(false)}
            style={{
              padding: "10px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--fh)",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "all 0.2s",
              background: !isAnnual ? "rgba(255, 255, 255, 0.06)" : "transparent",
              color: !isAnnual ? "var(--text)" : "var(--text3)",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            style={{
              padding: "10px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--fh)",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "all 0.2s",
              background: isAnnual ? "rgba(255, 255, 255, 0.06)" : "transparent",
              color: isAnnual ? "var(--text)" : "var(--text3)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Annual
            <span style={{
              padding: "2px 8px",
              borderRadius: "6px",
              background: "rgba(16, 185, 129, 0.15)",
              color: "#10b981",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}>
              2 months free
            </span>
          </button>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <section style={{ padding: "0 0 clamp(56px,8vw,100px)" }}>
        <div className="pgrid" style={{
          display: "grid",
          alignItems: "stretch",
        }}>
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pc2${p.feat ? " feat" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "2.2rem 1.8rem 1.8rem",
                borderRadius: "24px",
                border: p.feat ? "1.5px solid rgba(124, 77, 255, 0.5)" : undefined,
                boxShadow: p.feat ? "0 0 24px rgba(124, 77, 255, 0.15)" : undefined,
              }}
            >
              {p.badge && <div className="pbadge">{p.badge}</div>}
              <div style={{ flex: 1 }}>
                <div className="pname" style={{ color: p.accent || "var(--text2)" }}>{p.name}</div>

                {/* Price */}
                <div className="pprice">
                  {p.priceMonthly === null ? (
                    <span style={{
                      background: "linear-gradient(90deg, #E879F9, #C026D3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>Custom</span>
                  ) : (
                    <>
                      ${p.priceMonthly}
                      <span className="per"> {isAnnual ? "/mo" : "/month"}</span>
                    </>
                  )}
                </div>

                {/* Annual Billed Subtext */}
                {isAnnual && p.priceAnnual !== null && p.priceAnnual > 0 && (
                  <div style={{
                    fontSize: "0.72rem",
                    color: "var(--text3)",
                    marginTop: "-4px",
                    marginBottom: "12px",
                    fontFamily: "var(--fh)"
                  }}>
                    Billed annually (${p.priceAnnual}/yr)
                  </div>
                )}

                {/* Credits badge */}
                <div style={{ marginBottom: 12 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "4px 10px",
                    borderRadius: 100,
                    background: `${p.accent}1f`,
                    border: `1px solid ${p.accent}40`,
                    fontFamily: "var(--fh)", fontSize: ".68rem", fontWeight: 700,
                    color: p.accent || "var(--p3)", letterSpacing: ".05em",
                  }}>
                    ⚡ {p.id === "custom" ? "Custom credits" : `${p.credits.toLocaleString()} credits / month`}
                  </span>
                </div>

                <p className="pdesc">{p.desc}</p>

                {/* Features List */}
                <ul className="plist" style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {p.items.map((it, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text2)" }}>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: p.feat 
                          ? "var(--grad)" 
                          : `${p.accent}26`,
                        color: p.feat ? "#fff" : p.accent || "var(--p2)",
                        fontSize: "10px",
                        fontWeight: "bold",
                        flexShrink: 0,
                      }}>
                        ✓
                      </span>
                      {it}
                    </li>
                  ))}
                  {p.no && p.no.map((it, j) => (
                    <li key={`no-${j}`} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text3)", opacity: 0.45 }}>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.08)",
                        color: "var(--text3)",
                        fontSize: "12px",
                        fontWeight: "bold",
                        flexShrink: 0,
                      }}>
                        -
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              {p.id === "custom" ? (
                <a
                  href={p.ctaLink}
                  className="pbtn2"
                  style={{
                    width: "100%", marginTop: "auto", display: "block",
                    background: "linear-gradient(90deg, #E879F9, #C026D3)",
                    color: "#fff",
                    boxShadow: "0 0 28px rgba(232, 121, 249, 0.4)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(232, 121, 249, 0.6)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 28px rgba(232, 121, 249, 0.4)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {p.cta}
                </a>
              ) : p.feat ? (
                <a
                  href={p.ctaLink}
                  className={`pbtn2 ${p.ctaClass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", marginTop: "auto", display: "block" }}
                >
                  {p.cta}
                </a>
              ) : (
                <a
                  href={p.ctaLink}
                  className="pbtn2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%", marginTop: "auto", display: "block",
                    border: `1px solid ${p.accent}66`,
                    background: `${p.accent}0d`,
                    color: p.accent,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${p.accent}1a`;
                    e.currentTarget.style.borderColor = p.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${p.accent}0d`;
                    e.currentTarget.style.borderColor = `${p.accent}66`;
                  }}
                >
                  {p.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE CREDIT CALCULATOR ── */}
      <div style={{ padding: "0 var(--wrap-px)" }}>
        <CreditCalculator />
      </div>

      {/* ── CREDIT COST TABLE ── */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 var(--wrap-px) clamp(56px,7vw,80px)" }}>
        <div style={{ fontFamily: "var(--fh)", fontSize: "clamp(1rem,2vw,1.2rem)", fontWeight: 700, textAlign: "center", marginBottom: 8, color: "var(--text2)" }}>
          Action Credit Costs
        </div>
        <p style={{ textAlign: "center", color: "var(--text3)", fontSize: ".8rem", marginBottom: 24, fontFamily: "var(--fh)" }}>
          Credits are only deducted on successful generations.
        </p>
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
          <table className="ctable" style={{ minWidth: "100%", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Action</th>
                <th style={{ textAlign: "right" }}>Credits</th>
              </tr>
            </thead>
            <tbody>
              {actionCosts.map(([action, cost], i) => {
                const isProject = action === "Create Project";
                const color =
                  cost >= 50 ? "#f59e0b" :
                  cost >= 20 ? "var(--p3)" :
                  "var(--text2)";
                return (
                  <tr key={i} style={isProject ? { background: "rgba(124,77,255,.06)" } : {}}>
                    <td style={{ fontWeight: isProject ? 600 : 400, color: isProject ? "var(--text)" : "var(--text2)" }}>
                      {action}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <span style={{
                        display: "inline-block",
                        padding: "2px 10px",
                        borderRadius: 8,
                        background: isProject ? "var(--grad)" : `${color}18`,
                        color: isProject ? "#fff" : color,
                        fontFamily: "var(--fh)",
                        fontSize: ".72rem",
                        fontWeight: 700,
                      }}>
                        {cost} cr
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── FULL COMPARISON TABLE ── */}
      <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 var(--wrap-px) clamp(48px,7vw,80px)" }}>
        <div style={{ fontFamily: "var(--fh)", fontSize: "clamp(1rem,2vw,1.2rem)", fontWeight: 700, textAlign: "center", marginBottom: 28, color: "var(--text2)" }}>
          Full Feature Comparison
        </div>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as any, borderRadius: 16 }}>
          <table className="ctable" style={{ minWidth: 640 }}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th className="hl-col">Starter</th>
                <th>Max</th>
                <th>Studio</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className={j === 1 ? "hl-col" : ""}>
                      <span className={cell === "✓" ? "chk" : cell === "✕" ? "crs" : cell.startsWith("✓") ? "chk" : cell.startsWith("✕") ? "crs" : ""}>
                        {cell}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="divl" />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="cta-b">
          <div>
            <h2>Ready to Create <em>Faster</em>?</h2>
            <p>Start free — no card needed.</p>
          </div>
          <div className="cta-b-btns">
            <a href="https://app.kreatoraistudio.com" className="btn btn-p" target="_blank" rel="noopener noreferrer">
              Start Free Today
            </a>
            <Link href="/services" className="btn btn-s">Explore Tools</Link>
          </div>
        </div>
      </div>
    </>
  );
}
