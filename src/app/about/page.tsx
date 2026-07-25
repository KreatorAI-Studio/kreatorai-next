"use client";

import Link from "next/link";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiSparkles, HiLightningBolt, HiChip, HiGlobeAlt, HiCode } from "react-icons/hi";

const values = [
  { icon: <HiLightningBolt className="w-6 h-6 text-purple-400" />, title: "Speed First", desc: "Every tool is engineered to eliminate creative bottlenecks and ship content fast." },
  { icon: <HiSparkles className="w-6 h-6 text-pink-400" />, title: "Creator-Centric", desc: "Built specifically for modern creators and agencies. Zero bloat, maximum output." },
  { icon: <HiChip className="w-6 h-6 text-cyan-400" />, title: "AI-Native Ecosystem", desc: "Deeply integrated with Claude 3.5 Sonnet, OpenAI, ElevenLabs, and HeyGen at the core." },
  { icon: <HiGlobeAlt className="w-6 h-6 text-emerald-400" />, title: "Universal Access", desc: "Democratizing studio-grade content tools for independent creators worldwide." },
];

const techStack = [
  "Next.js 16",
  "Flutter",
  "FastAPI",
  "Claude 3.5 Sonnet",
  "Gemini AI",
  "ElevenLabs",
  "HeyGen Avatars",
  "Stability AI",
  "Firebase",
  "Cloudflare Workers",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* ── HERO SECTION ───────────────────────────── */}
      <div className="page-hero text-center pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="kicker inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          <HiSparkles className="w-4 h-4 text-purple-400" />
          About KreatorAI
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>
          Empowering the <br className="hidden sm:inline" />
          <em className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent not-italic">
            Modern Creator Economy
          </em>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto font-medium" style={{ color: "var(--text2)" }}>
          KreatorAI is the all-in-one AI social media command center — built to take creators from initial idea to multi-platform publishing without friction.
        </p>
      </div>

      {/* ── MISSION STATEMENT BLOCK ──────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="relative overflow-hidden p-8 sm:p-14 rounded-3xl border text-center" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <blockquote className="text-xl sm:text-3xl font-extrabold leading-snug tracking-tight max-w-3xl mx-auto mb-6" style={{ color: "var(--text)" }}>
            "We believe every creator deserves{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              studio-grade AI tools
            </span>{" "}
            without needing a 10-person production team."
          </blockquote>
          <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
            — The KreatorAI Mission
          </p>
        </div>
      </div>

      {/* ── CORE PILLARS / VALUES ─────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold" style={{ color: "var(--text)" }}>
            Driven by Core Principles
          </h2>
          <p className="text-base mt-2" style={{ color: "var(--text2)" }}>
            What makes KreatorAI the preferred operating system for creators and agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border)" }}>
              <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">{v.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECH STACK & ARCHITECTURE ─────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-8 sm:p-10 rounded-3xl border text-center" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-4">
            <HiCode className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Engineered for Speed & Scale
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: "var(--text2)" }}>
            Powered by modern high-performance cloud infrastructure and state-of-the-art AI models.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs font-bold border transition-colors"
                style={{
                  background: "rgba(124, 77, 255, 0.08)",
                  borderColor: "var(--border-p)",
                  color: "var(--p3)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEET THE FOUNDER ─────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl border" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Founder Avatar & Bio */}
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-3xl overflow-hidden border-2 border-purple-500/40 p-1 bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl mb-4">
                <img
                  src="/assets/images/photo.png"
                  alt="Neil Surjiani"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <h3 className="text-xl font-extrabold" style={{ color: "var(--text)" }}>Neil Surjiani</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-4">Founder & Solo Developer</p>
              
              <div className="flex items-center gap-3 text-slate-400 mb-4">
                <a href="https://instagram.com/neilsurjiani28" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/neilsurjiani28" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/neil-surjiani" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/neil-surjiani" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href="https://neil-surjiani.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-transform"
              >
                View Portfolio →
              </a>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                Building the Future of Creator Tools, One Commit at a Time
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                Hi, I'm Neil — a solo developer from Pune, India. I built KreatorAI because I saw creators spending hours switching between disconnected apps for scripting, video editing, voiceovers, and publishing.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                Every line of Flutter code, FastAPI backend architecture, Cloudflare routing, and UI design token in KreatorAI was built to give creators an all-in-one studio co-pilot.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                Our vision is to evolve KreatorAI into the premier AI creative operating system for creators, personal brands, and digital agencies worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="cta-b">
          <div>
            <h2>Ready to Join the <em>Future of Creation</em>?</h2>
            <p>Start free today — no credit card needed.</p>
          </div>
          <div className="cta-b-btns">
            <a href="https://app.kreatoraistudio.com" className="btn btn-p" target="_blank" rel="noopener noreferrer">
              Start Free Today
            </a>
            <Link href="/services" className="btn btn-s">
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
