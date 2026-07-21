"use client";

import { useState } from "react";
import Link from "next/link";

// ── Credit cost badge helper
const cr = (n: number) => `${n} credits`;

// ── Platform management — the core "all-in-one manager" layer (no credit cost)
const platformTools = [
  {
    icon: "📅", title: "Schedule & Publish Everywhere", badge: "All Plans",
    desc: "Plan once, publish everywhere. Connect Instagram, LinkedIn, X, YouTube and more, then schedule content to go live across every platform from a single calendar.",
    items: ["One calendar for every connected platform", "Auto-publish at your chosen time", "Bulk-schedule entire campaigns", "No more manual cross-posting"],
  },
  {
    icon: "🗂️", title: "Multiple Workspaces", badge: "All Plans",
    desc: "Running more than one brand, client, or creator account? Keep each one fully separate — its own content, schedule, connected platforms, and history.",
    items: ["Full content separation per workspace", "Switch workspaces instantly", "Built for agencies & multi-brand creators", "Independent scheduling per workspace"],
  },
  {
    icon: "📊", title: "Analytics Dashboard", badge: "All Plans",
    desc: "See how every post performs across every platform, side by side, in one dashboard — no more jumping between apps to check your numbers.",
    items: ["Unified analytics across all platforms", "Engagement, reach & growth tracking", "Best-performing content insights", "Per-platform and combined views"],
  },
];

// ── Studio-only heavy tools
const studioTools = [
  {
    icon: "🎭", title: "Faceless Video Generation", badge: "Studio Only", hl: true,
    cost: cr(300),
    desc: "Generate complete faceless videos with a full scene pipeline — no camera required. AI assembles visuals, voice, and music into a finished video.",
    items: [
      `Full AI scene pipeline — text to finished video (${cr(300)})`,
      "Auto B-roll & stock footage assembly",
      "AI voiceover + background music included",
      "Ready for YouTube, Reels, TikTok",
    ],
  },
  {
    icon: "🤖", title: "AI Avatar Videos", badge: "Studio Only", hl: true,
    cost: cr(200),
    desc: "Create a custom AI avatar and have it present your content — standard or ultra-realistic Pro quality. No filming or studio required.",
    items: [
      `Avatar Video Standard — HeyGen Avatar III (${cr(200)})`,
      `Avatar Video Pro — Ultra-realistic HeyGen Avatar IV (${cr(350)})`,
      `Create your own avatar from photos (${cr(200)})`,
      "Lip-synced to your script or voiceover",
    ],
  },
  {
    icon: "✨", title: "Motion Graphics", badge: "Studio Only", hl: false,
    cost: cr(15),
    desc: "AI-generated motion graphics for intros, outros, lower thirds, and visual effects — polished animated elements for any content type.",
    items: [
      `AI-generated motion graphic elements (${cr(15)})`,
      "Intros, outros & lower thirds",
      "Export-ready animated assets",
      "Matches your brand colours & style",
    ],
  },
];

// ── Video & media tools
const videoTools = [
  {
    icon: "🎬", title: "AI Video Generation", badge: "Max / Studio", hl: true,
    cost: cr(50),
    desc: "Turn ideas into polished video — from text prompts, images, or existing footage. Three powerful modes cover every production scenario.",
    items: [
      `Text-to-Video — generate cinematic clips from a prompt (${cr(50)})`,
      `Image-to-Video — animate any still into a moving scene (${cr(60)})`,
      `Video-to-Video — restyle or transform existing footage (${cr(70)})`,
    ],
  },
  {
    icon: "🖼️", title: "AI Image Generation", badge: "All Plans", hl: false,
    cost: cr(20),
    desc: "Create stunning visuals for thumbnails, ads, and mood boards. Four modes give you full creative control over every image.",
    items: [
      `Text-to-Image — generate high-res visuals from a prompt (${cr(20)})`,
      `Image-to-Image — remix & refine existing photos with AI (${cr(25)})`,
      `Aspect Ratio Changer — reframe any image for any platform (${cr(18)})`,
      `Background Remover — one-tap clean cutouts (${cr(18)})`,
    ],
  },
  {
    icon: "🖼️", title: "Thumbnail Generation", badge: "All Plans", hl: false,
    cost: cr(20),
    desc: "Generate 3 pro-quality thumbnail variants from a prompt — click-worthy designs optimised for YouTube, Reels, and shorts.",
    items: [
      `3 thumbnail variants per generation (${cr(20)})`,
      "Platform-specific compositions",
      "Bold text, face focus & colour pop styles",
      "One-tap download",
    ],
  },
  {
    icon: "🎵", title: "Audio Tools", badge: "All Plans", hl: true,
    cost: cr(15),
    desc: "Give your content a professional sound layer — AI voices, premium ElevenLabs voices, and royalty-free music, all generated in-app.",
    items: [
      `Text-to-Speech Standard — realistic AI voice-overs (${cr(25)})`,
      `Text-to-Speech Premium — ElevenLabs ultra-natural voices (${cr(45)})`,
      `Background Music — AI-generated mood-matched tracks (${cr(15)})`,
      `AI Music Generation via Suno — custom songs from text (${cr(30)})`,
    ],
  },
  {
    icon: "🎙️", title: "Caption Generation", badge: "All Plans", hl: false,
    cost: cr(22),
    desc: "Upload your video and KreatorAI automatically analyses the audio to generate accurate, styled captions — ready to burn in or export.",
    items: [
      "AI video analysis & speech recognition",
      "Auto-synced captions with timing",
      "Multiple caption style presets",
      "Export-ready for any platform",
    ],
  },
  {
    icon: "📦", title: "Asset Pack", badge: "All Plans", hl: false,
    cost: cr(35),
    desc: "Generate a full content asset pack in one click — a set of images and ready-to-post captions delivered as a ZIP, covering multiple angles and formats.",
    items: [
      `Full image + caption bundle (${cr(35)})`,
      "Multiple platform formats in one pack",
      "Brand-consistent visual set",
      "Instant ZIP download",
    ],
  },
];

// ── Text / content tools (all plans, credit-gated)
const contentTools = [
  {
    icon: "📝", title: "Script Generator", badge: "All Plans", cost: cr(12),
    desc: "Generate shot-by-shot scripts for Reels, Shorts, and long-form YouTube. Hook-first, production-ready, niche-matched.",
    items: ["Hook-first content structure", "Shot-by-shot breakdown", "Platform-optimised length", "Niche-specific tone matching"],
  },
  {
    icon: "📄", title: "Description Generator", badge: "All Plans", cost: cr(6),
    desc: "Auto-generate SEO-optimised descriptions for YouTube, Reels, and posts. Keyword-rich, human-sounding, discovery-ready.",
    items: ["SEO-optimised keywords", "Platform-specific formatting", "Hook + body + CTA structure", "Character count aware"],
  },
  {
    icon: "💡", title: "Content Ideas Engine", badge: "All Plans", cost: cr(10),
    desc: "Never run out of ideas. Get AI-powered topic suggestions tailored to your niche, platform, and trending formats.",
    items: ["Trend-aware suggestions", "Niche-specific angles", "Series & format ideas", "Seasonal content planning"],
  },
  {
    icon: "#️⃣", title: "Hashtag Generator", badge: "All Plans", cost: cr(4),
    desc: "Platform-aware hashtag sets ranked by reach and niche relevance. Stop guessing — use data-backed tags that actually grow reach.",
    items: ["Ranked by reach & relevance", "Platform-specific sets (IG, TikTok, YT)", "Niche + trending mix", "One-tap copy"],
  },
  {
    icon: "🪝", title: "Hook Generator", badge: "All Plans", cost: cr(10),
    desc: "Generate scroll-stopping opening lines for any platform. First 3 seconds matter — let AI nail them for you.",
    items: ["Multiple hook styles & tones", "Platform-specific hooks (Reels, Shorts, TikTok)", "A/B variants in one generation", "Niche-matched phrasing"],
  },
  {
    icon: "♻️", title: "Repurpose Content", badge: "All Plans", cost: cr(12),
    desc: "Turn one piece of content into many. Transform a YouTube script into a tweet thread, blog post, or Instagram caption instantly.",
    items: ["Cross-platform reformatting", "Tone & length adaptation", "One-click multi-format output", "Preserves key messaging"],
  },
  {
    icon: "✏️", title: "Edit Guide", badge: "All Plans", cost: cr(8),
    desc: "Get a detailed editing plan for your video — cuts, pacing, transitions, and B-roll suggestions written out for you.",
    items: ["Cut-by-cut editing notes", "Pacing & rhythm suggestions", "B-roll placement guide", "Platform-specific edit style"],
  },
  {
    icon: "🏷️", title: "Generate Title", badge: "All Plans", cost: cr(6),
    desc: "Click-worthy, SEO-friendly titles for YouTube, Reels, and blog posts. Tested formats that drive views.",
    items: ["Multiple title variants", "Curiosity-gap & value-first formats", "Keyword-aware for SEO", "Platform-specific length tuning"],
  },
];

export default function ServicesPage() {
  const [category, setCategory] = useState<"all" | "platform" | "video" | "media" | "content">("all");

  return (
    <>
      <div className="page-hero">
        <div style={{ justifyContent: "center", display: "inline-flex" }} className="kicker">Our Tools</div>
        <h1>Every Tool a<br /><em>Creator Needs</em></h1>
        <p>
          The all-in-one social media manager — create, schedule, publish, and track performance
          across every platform, plus 20+ AI-powered content tools, all in one place.
        </p>

        {/* Category Filter Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
          marginTop: 32,
        }}>
          {[
            { id: "all", label: "✨ All 20+ Tools" },
            { id: "video", label: "🎬 AI Video & Avatars" },
            { id: "media", label: "🎵 Audio & Media" },
            { id: "content", label: "📝 Content & Writing" },
            { id: "platform", label: "📅 Publishing & Analytics" },
          ].map((tab) => {
            const isActive = category === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id as any)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 100,
                  fontFamily: "var(--fh)",
                  fontSize: ".82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  background: isActive ? "var(--grad)" : "rgba(255, 255, 255, 0.04)",
                  color: isActive ? "#fff" : "var(--text2)",
                  border: isActive ? "1px solid transparent" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive ? "0 0 24px rgba(124, 77, 255, 0.4)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PUBLISH, MANAGE & ANALYZE ───────────────────────────── */}
      {(category === "all" || category === "platform") && (
        <div className="services-grid">
          <div className="svc-section-label"><span>Publish, Manage & Analyze — All Platforms, One Place</span></div>
          {platformTools.map((s, i) => (
            <div key={i} className="svc-card hl svc-shimmer">
              <span className="svc-icon" style={{ display: "inline-block" }}>{s.icon}</span>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <ul className="svc-list">{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <span className="svc-badge badge-free">{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── CREDIT EXPLAINER STRIP ──────────────────────────────── */}
      <div style={{
        maxWidth: 720, margin: "0 auto clamp(40px,6vw,64px)",
        padding: "20px 28px",
        borderRadius: 16,
        border: "1px solid rgba(124,77,255,.2)",
        background: "rgba(124,77,255,.06)",
        display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
      }}>
        <span style={{ fontSize: "1.6rem" }}>⚡</span>
        <div>
          <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".9rem", color: "var(--text)", marginBottom: 4 }}>
            How credits work
          </div>
          <div style={{ fontSize: ".8rem", color: "var(--text2)", lineHeight: 1.6 }}>
            Every plan includes a monthly credit allowance that resets on the 1st.
            Each AI action costs a set number of credits — only deducted on successful generations.
            {" "}<Link href="/pricing" style={{ color: "var(--p3)", fontWeight: 600 }}>See all plans →</Link>
          </div>
        </div>
      </div>

      {/* ── STUDIO-ONLY: FACELESS & AVATAR TOOLS ─────────────────── */}
      {(category === "all" || category === "video") && (
        <div className="services-grid">
          <div className="svc-section-label"><span>Faceless Video & AI Avatars — Studio Plan Only</span></div>
          {studioTools.map((s, i) => (
            <div key={i} className={`svc-card${s.hl ? " hl svc-shimmer" : ""}`}>
              <span className="svc-icon" style={{ display: "inline-block" }}>{s.icon}</span>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <ul className="svc-list">{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <span className="svc-badge badge-pro">{s.badge}</span>
                <span style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "3px 10px", borderRadius: 100,
                  background: "rgba(6,182,212,.10)",
                  border: "1px solid rgba(6,182,212,.25)",
                  fontFamily: "var(--fh)", fontSize: ".62rem", fontWeight: 700,
                  color: "#67e8f9", letterSpacing: ".05em",
                }}>
                  ⚡ from {s.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── VIDEO / MEDIA TOOLS ─────────────────────────────────── */}
      {(category === "all" || category === "video" || category === "media") && (
        <div className="services-grid">
          <div className="svc-section-label"><span>Video & Media Tools — All Plans (credit-gated)</span></div>
          {videoTools.map((s, i) => (
            <div key={i} className={`svc-card${s.hl ? " hl svc-shimmer" : ""}`}>
              <span className="svc-icon" style={{ display: "inline-block" }}>{s.icon}</span>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <ul className="svc-list">{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <span className={`svc-badge ${s.badge === "Max / Studio" ? "badge-pro" : "badge-free"}`}>{s.badge}</span>
                <span style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "3px 10px", borderRadius: 100,
                  background: "rgba(124,77,255,.10)",
                  border: "1px solid rgba(124,77,255,.2)",
                  fontFamily: "var(--fh)", fontSize: ".62rem", fontWeight: 700,
                  color: "var(--p3)", letterSpacing: ".05em",
                }}>
                  ⚡ from {s.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── TEXT / CONTENT TOOLS ─────────────────────────────── */}
      {(category === "all" || category === "content") && (
        <div className="services-grid">
          <div className="svc-divider" />
          <div className="svc-section-label"><span>Content Tools — All Plans</span></div>
          {contentTools.map((s, i) => (
            <div key={i} className="svc-card">
              <span className="svc-icon" style={{ display: "inline-block" }}>{s.icon}</span>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <ul className="svc-list">{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <span className="svc-badge badge-free">{s.badge}</span>
                <span style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "3px 10px", borderRadius: 100,
                  background: "rgba(124,77,255,.08)",
                  border: "1px solid rgba(124,77,255,.18)",
                  fontFamily: "var(--fh)", fontSize: ".62rem", fontWeight: 700,
                  color: "var(--p3)", letterSpacing: ".05em",
                }}>
                  ⚡ {s.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="divl" />

      <div style={{ position: "relative", zIndex: 2 }}>
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
