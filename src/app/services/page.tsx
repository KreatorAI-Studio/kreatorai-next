"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFigma,
  FaGoogleDrive,
  FaDropbox,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import {
  TbBrandOpenai,
  TbBrandZapier,
  TbBrandThreads,
} from "react-icons/tb";
import { 
  HiSparkles, 
  HiUserGroup, 
  HiLink, 
  HiCalendar, 
  HiChartBar, 
  HiVideoCamera,
  HiCpuChip,
  HiFolder
} from "react-icons/hi2";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryTabs = [
    { id: "all", label: "✨ All Capabilities" },
    { id: "integrations", label: "🔗 Integrations" },
    { id: "biopage", label: "🌐 Bio Page Creator" },
    { id: "collab", label: "👥 Team Collab" },
    { id: "ai-assistant", label: "🤖 AI Assistant" },
    { id: "video", label: "🎬 Pro Video & Avatars" },
    { id: "publishing", label: "📅 Publisher & Analytics" },
  ];

  return (
    <div className="min-h-screen pb-28">
      {/* ── HERO SECTION ───────────────────────────── */}
      <div className="page-hero text-center pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="kicker inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          <HiSparkles className="w-4 h-4 text-purple-400" />
          KreatorAI Capabilities & Tools
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>
          Everything Your Social Media <br className="hidden sm:inline" />
          <em className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent not-italic">
            Workflow Needs
          </em>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto font-medium" style={{ color: "var(--text2)" }}>
          From seamless integrations with Canva & Figma to team collaboration, custom Bio Pages, and an inbuilt conversational AI co-pilot.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 border-transparent"
                    : "bg-white/5 dark:bg-white/5 border border-slate-200/20 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* ── 1. CORE INTEGRATIONS SUITE ─────────────────── */}
        {(activeTab === "all" || activeTab === "integrations") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                <HiFolder className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Connected Ecosystem</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  Deep Tool & Platform Integrations
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              No more exporting, re-downloading, or tab switching. KreatorAI connects directly into your existing design, AI, cloud storage, and automation workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-extrabold text-xl text-[#00C4CC]">Canva</span>
                  <FaFigma className="w-7 h-7 text-[#F24E1E]" />
                  <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>Canva & Figma Sync</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Import design templates, brand kits, and graphics straight into your social calendar. Auto-generate thumbnails and post graphics without leaving KreatorAI.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-extrabold text-xl text-[#D97706]">Claude</span>
                  <TbBrandOpenai className="w-7 h-7 text-[#10A37F]" />
                  <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>Claude & ChatGPT LLMs</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Powered by Anthropic’s Claude 3.5 Sonnet and OpenAI GPT-4o. Get deep reasoning for viral hooks, retention-focused video scripts, and nuanced copywriting.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <FaGoogleDrive className="w-6 h-6 text-[#4285F4]" />
                  <FaDropbox className="w-6 h-6 text-[#0061FF]" />
                  <TbBrandZapier className="w-6 h-6 text-[#FF4F00]" />
                  <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>Cloud & Zapier</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Auto-sync raw footage from Google Drive or Dropbox. Connect KreatorAI to 5,000+ web applications via Zapier Webhooks for automated publishing pipelines.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 2. LINK-IN-BIO CREATOR ───────────────────── */}
        {(activeTab === "all" || activeTab === "biopage") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400">
                <HiLink className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Custom Landing Sites</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  High-Converting Bio Page Creator
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              Turn your social bio traffic into leads and revenue. Build gorgeous, lightning-fast Link-in-Bio pages customized to your personal brand in under 2 minutes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Custom Themes & Domains</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Choose from glassmorphism, dark aesthetic, or clean light templates. Connect your custom domain e.g. <code className="text-xs bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded">links.yourbrand.com</code>.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">📹</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Rich Media Embeds</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Embed YouTube videos, Spotify tracks, latest Instagram Reels, newsletter signup forms, and digital product checkout links directly into your Bio Page.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Bio Traffic Analytics</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Track unique page visitors, link click-through rates (CTR), top referring platforms, and geographic audience analytics in real-time.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 3. TEAM COLLABORATION ────────────────────── */}
        {(activeTab === "all" || activeTab === "collab") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <HiUserGroup className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Agencies & Teams</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  Multi-User Team Collaboration
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              Never pass video files over email or Slack again. Invite client managers, video editors, and copywriters to work side-by-side in structured brand workspaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">🔐</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Granular Team Roles</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Assign role permissions (Workspace Owner, Content Editor, Client Reviewer, Viewer) so everyone has access to only what they need.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Live Post Approval Threads</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Clients and team leads can leave feedback, request script edits, or approve posts before they go live on connected social platforms.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">🗂️</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Shared Brand Asset Kits</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Store brand logos, custom fonts, color palettes, intros, and audio stings in one shared hub accessible across every project in the workspace.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 4. INBUILT AI ASSISTANT ────────────────────── */}
        {(activeTab === "all" || activeTab === "ai-assistant") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <HiCpuChip className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">24/7 Creator Sidekick</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  Inbuilt Conversational AI Assistant
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              Meet your 24/7 AI creative partner inside KreatorAI. Ask questions, brainstorm viral angles, optimize existing captions, or get strategic advice tailored to your niche.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Instant Brainstorming</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Prompt the assistant: <em className="text-xs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">"Give me 5 viral video angles for a tech SaaS launch"</em> and get production-ready concepts in seconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">✍️</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Copy & Caption Rewriter</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Ask the assistant to rewrite any text for a specific platform tone — make it punchy for X (Twitter), professional for LinkedIn, or casual for TikTok.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Strategic Advice</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Get automated posting frequency recommendations, optimal hashtag strategies, and audience retention tips customized to your channel metrics.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 5. PRO VIDEO & AI AVATARS ──────────────────── */}
        {(activeTab === "all" || activeTab === "video") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                <HiVideoCamera className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Studio Video Engine</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  Faceless Video & Ultra-Realistic AI Avatars
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              Create studio-quality video content without stepping in front of a camera. Generate complete faceless videos or create digital AI presenter avatars.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">🎭</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Faceless Shorts & Reels</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Automated scene assembly — AI combines script, HD stock footage, ElevenLabs neural voiceover, and captions into a polished vertical video ready for Reels & Shorts.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>AI Presenter Avatars</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Choose from 50+ hyper-realistic AI avatars or create your own custom digital twin from photos. Lip-synced to any voice or language.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">✂️</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Long Video → Shorts Clipper</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Paste a YouTube video link or upload a long podcast. KreatorAI automatically identifies viral moments, cuts them into 9:16 clips, and adds animated captions.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 6. PUBLISHING & ANALYTICS ───────────────────── */}
        {(activeTab === "all" || activeTab === "publishing") && (
          <section className="rounded-3xl p-8 sm:p-10 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <HiCalendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Multi-Channel Command Center</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--text)" }}>
                  Automated Publishing & Cross-Platform Analytics
                </h2>
              </div>
            </div>
            <p className="text-base mb-8 max-w-3xl" style={{ color: "var(--text2)" }}>
              Schedule once, auto-publish everywhere. Manage Instagram, LinkedIn, X (Twitter), YouTube, TikTok, Facebook, Threads, and Pinterest from a single calendar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Unified Content Calendar</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Drag-and-drop scheduling across all connected accounts. Set custom publishing times for maximum audience engagement per platform.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Cross-Platform Dashboard</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Compare views, engagement rates, follower growth, and click-through performance across all social accounts side-by-side.
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>Smart Auto-Posting</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                  Auto-publish video Shorts to YouTube, Reels to IG & Facebook, and video pins to Pinterest simultaneously without manual post triggers.
                </p>
              </div>
            </div>
          </section>
        )}

      </div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="cta-b">
          <div>
            <h2>Ready to Transform Your <em>Social Media Workflow</em>?</h2>
            <p>Start free today — no credit card required.</p>
          </div>
          <div className="cta-b-btns">
            <a href="https://app.kreatoraistudio.com" className="btn btn-p" target="_blank" rel="noopener noreferrer">
              Start Free Today
            </a>
            <Link href="/pricing" className="btn btn-s">
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
