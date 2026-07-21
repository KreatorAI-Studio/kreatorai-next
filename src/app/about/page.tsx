"use client";
import Link from "next/link";

// Section-level scroll reveal — whole block animates as one unit
const values = [
  { icon: "⚡", title: "Speed First", desc: "Every tool is built to eliminate friction and ship content fast." },
  { icon: "🎯", title: "Creator-Centric", desc: "Built by a creator, for creators. No bloat, just tools that matter." },
  { icon: "🧠", title: "AI-Native", desc: "Not AI-wrapped — AI is in the core of every generation." },
  { icon: "🌍", title: "Accessible", desc: "World-class AI tools should be accessible, not just enterprise-priced." },
];

const tags = ["Flutter", "FastAPI", "Gemini AI", "Stability AI", "Firebase", "Cloudflare", "Python", "Dart"];

export default function AboutPage() {
  return (
    <>
      <div className="reveal page-hero">
        <div style={{ justifyContent: "center", display: "inline-flex" }} className="kicker">About Us</div>
        <h1>Built for the<br /><em>Modern Creator</em></h1>
        <p>KreatorAI is on a mission to make professional AI content creation accessible to every creator on the planet.</p>
      </div>

      {/* Mission quote */}
      <div className="reveal" style={{ maxWidth: 1160, margin: "0 auto", padding: "0 var(--wrap-px) clamp(48px,7vw,80px)" }}>
        <div style={{
          background: "linear-gradient(135deg,rgba(124,77,255,.08),rgba(255,77,141,.05))",
          border: "1px solid var(--border-p)", borderRadius: 24,
          padding: "clamp(32px,5vw,60px)", textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -10, left: 40,
            fontFamily: "var(--fh)", fontSize: "clamp(6rem,12vw,12rem)", fontWeight: 800,
            color: "var(--p1)", opacity: .05, lineHeight: 1, pointerEvents: "none", userSelect: "none",
          }}>"</div>
          <blockquote style={{
            fontFamily: "var(--fh)", fontSize: "clamp(1.1rem,2.5vw,1.9rem)",
            fontWeight: 700, color: "var(--text)", lineHeight: 1.4, letterSpacing: "-.02em",
            maxWidth: 720, margin: "0 auto 20px",
          }}>
            We believe every creator deserves{" "}
            <em style={{ fontStyle: "normal", background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              professional-grade AI tools
            </em>{" "}
            — without the enterprise price tag.
          </blockquote>
          <div style={{ fontSize: ".85rem", color: "var(--text2)" }}>— The KreatorAI Mission</div>
        </div>
      </div>

      {/* Story + values grid */}
      <div
        className="reveal about-story-grid"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 var(--wrap-px) clamp(48px,7vw,80px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px,5vw,64px)",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontFamily: "var(--fh)", fontSize: "clamp(1.6rem,3vw,2.6rem)", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 16, lineHeight: 1.1 }}>
            Why We Built <em style={{ fontStyle: "normal", background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>KreatorAI</em>
          </h2>
          <p style={{ fontSize: ".95rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 14 }}>
            Content creation is hard. Scripting, filming, editing, captioning, distributing — it's a full-time job before you even think about growing. Most AI tools solve one tiny slice of that problem.
          </p>
          <p style={{ fontSize: ".95rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 14 }}>
            KreatorAI was built to be the complete creative co-pilot — one platform where creators go from idea to finished, polished content without switching between 10 different apps.
          </p>
          <p style={{ fontSize: ".95rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 28 }}>
            Built by a solo developer, shipped fast, and designed to stay ahead.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="values-grid">
            {values.map((v, i) => (
              <div key={i} style={{
                background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: 14, backdropFilter: "blur(16px)", padding: "14px 16px",
              }}>
                <div style={{ fontSize: "1.2rem", marginBottom: 6 }}>{v.icon}</div>
                <div style={{ fontFamily: "var(--fh)", fontSize: ".82rem", fontWeight: 700, color: "var(--text)" }}>{v.title}</div>
                <div style={{ fontSize: ".73rem", color: "var(--text2)", marginTop: 3, lineHeight: 1.5 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderRadius: 24, overflow: "hidden",
          background: "linear-gradient(145deg,rgba(124,77,255,.1),rgba(255,77,141,.07))",
          border: "1px solid var(--border-pp)", padding: "clamp(24px,4vw,40px)",
          minHeight: "clamp(280px,40vw,420px)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: 28, left: 28, right: 28,
            fontFamily: "var(--fh)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 800,
            lineHeight: 1, letterSpacing: "-.05em",
            background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            opacity: .15, userSelect: "none",
          }}>KREATORAI STUDIO</div>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            background: "radial-gradient(ellipse at 50% 0%,rgba(124,77,255,.15),transparent 60%)", pointerEvents: "none",
          }} />
          <div style={{ display: "flex", gap: 12, position: "relative", zIndex: 1, flexWrap: "wrap" }}>
            {[["10+", "AI Tools"], ["4.9★", "Rating"]].map(([num, label], i) => (
              <div key={i} style={{
                flex: 1, minWidth: 80,
                background: "rgba(7,7,15,.6)", border: "1px solid var(--border-p)",
                borderRadius: 14, padding: "clamp(12px,2vw,16px)", textAlign: "center", backdropFilter: "blur(8px)",
              }}>
                <div style={{ fontFamily: "var(--fh)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 800, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{num}</div>
                <div style={{ fontSize: ".73rem", color: "var(--text2)", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 32px !important }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr 1fr !important }
        }
      `}</style>

      <div className="divl" />

      {/* Founder */}
      <div className="reveal" style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(48px,7vw,80px) var(--wrap-px) clamp(56px,8vw,100px)" }}>
        <h2 style={{ fontFamily: "var(--fh)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 40, lineHeight: 1.1 }}>
          Meet the <em style={{ fontStyle: "normal", background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Founder</em>
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 2fr",
          gap: "clamp(24px,4vw,48px)",
          background: "var(--card)", border: "1px solid var(--border-pp)", borderRadius: 28,
          padding: "clamp(24px,4vw,48px)", alignItems: "start", position: "relative", overflow: "hidden",
        }} className="founder-grid">
          <div style={{
            position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(124,77,255,.12),transparent 70%)", pointerEvents: "none",
          }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{
              width: "clamp(100px,18vw,160px)", height: "clamp(100px,18vw,160px)", borderRadius: 20, overflow: "hidden",
              border: "2px solid var(--border-pp)", marginBottom: 20,
              background: "linear-gradient(135deg,var(--p1),var(--pk))",
              position: "relative", flexShrink: 0,
            }}>
              <img
                src="/assets/images/photo.png"
                alt="Neil Surjiani"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div style={{ fontFamily: "var(--fh)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>Neil Surjiani</div>
            <div style={{ fontSize: ".78rem", color: "var(--p2)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", fontFamily: "var(--fh)" }}>Founder & Solo Developer</div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>
              <a href="https://instagram.com/neilsurjiani28" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="https://twitter.com/neilsurjiani28" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.82L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.54h2.04L6.486 3.24H4.31l13.298 17.452z" />
                </svg>
              </a>
              <a href="https://github.com/neil-surjiani" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.48v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .26.16.58.67.48A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/neil-surjiani" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
            <a href="https://neil-surjiani.github.io" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18,
              padding: "9px 18px", borderRadius: "100px",
              background: "var(--grad)", color: "#fff",
              fontFamily: "var(--fh)", fontSize: ".78rem", fontWeight: 700,
              textDecoration: "none", boxShadow: "0 0 20px rgba(124,77,255,.35)",
            }}>View Portfolio →</a>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: 800, letterSpacing: "-.02em", marginBottom: 14, color: "var(--text)" }}>Building the future of creator tools, one commit at a time.</h3>
            <p style={{ fontSize: ".92rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 12 }}>
              Hi, I'm Neil — a 16-year-old solo developer from Pune, India. I built KreatorAI because I saw creators struggle to produce quality content consistently, while the best AI tools were scattered across expensive, enterprise-only platforms.
            </p>
            <p style={{ fontSize: ".92rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 12 }}>
              I'm the only person building this — every line of Flutter, every FastAPI endpoint, every Cloudflare rule, every design token. It's a one-person studio building tools for millions of creators.
            </p>
            <p style={{ fontSize: ".92rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: 20 }}>
              KreatorAI is just the beginning. The long-term vision is a full AI creative operating system for the modern content creator economy.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  padding: "5px 14px", borderRadius: "100px",
                  background: "rgba(124,77,255,.08)", border: "1px solid var(--border-p)",
                  fontFamily: "var(--fh)", fontSize: ".73rem", fontWeight: 700,
                  color: "var(--p3)", letterSpacing: ".06em",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important }
        }
      `}</style>

      <div className="divl" />

      <div className="reveal" style={{ position: "relative", zIndex: 2 }}>
        <div className="cta-b">
          <div>
            <h2>Ready to Create <em>Faster</em>?</h2>
            <p>Start free — no card needed.</p>
          </div>
          <div className="cta-b-btns">
            <a href="https://app.kreatoraistudio.com" className="btn btn-p" target="_blank" rel="noopener noreferrer">Start Free Today</a>
            <Link href="/pricing" className="btn btn-s">See Pricing</Link>
          </div>
        </div>
      </div>
    </>
  );
}
