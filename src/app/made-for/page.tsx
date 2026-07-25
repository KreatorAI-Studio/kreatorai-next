"use client";

import { useState, ReactElement } from "react";
import Link from "next/link";
import {
  HiSparkles,
  HiBuildingStorefront,
  HiBriefcase,
  HiHeart,
  HiCodeBracket,
  HiCheckCircle,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

interface PersonaSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: ReactElement;
  heroText: string;
  features: {
    title: string;
    desc: string;
    highlights: string[];
  }[];
  workflow: { step: string; desc: string }[];
  goodFit: string[];
  recommendedPlan: string;
}

const PERSONAS: PersonaSection[] = [
  {
    id: "creators",
    title: "Creators & Influencers",
    subtitle: "Produce more content in less time without living inside editing software.",
    badge: "Solo Creators & Video Artists",
    icon: <HiSparkles className="w-6 h-6 text-purple-400" />,
    heroText:
      "KreatorAI acts as a compact production studio for solo creators — generating hooks and scripts, assembling faceless or AI-avatar video, and publishing to Reels, Shorts, and TikTok from one calendar.",
    features: [
      {
        title: "Faceless & AI Avatar Video Creation",
        desc: "Turn a written script into a vertical video with stock B-roll, AI voiceover, and an optional AI avatar presenter.",
        highlights: ["Auto B-roll assembly", "AI voiceover", "9:16 vertical export"],
      },
      {
        title: "Link-in-Bio Pages",
        desc: "Build a Bio Page that routes social traffic to your newsletter, storefront, or digital products.",
        highlights: ["Custom domain support", "Video & audio embeds", "Click analytics"],
      },
      {
        title: "Cross-Platform Publisher",
        desc: "Schedule once and publish to Instagram, TikTok, YouTube Shorts, X, and Threads from a single calendar.",
        highlights: ["Drag-and-drop calendar", "Posting-time suggestions", "Auto-generated captions"],
      },
    ],
    workflow: [
      { step: "Script", desc: "Prompt the AI assistant for a hook and short-form script." },
      { step: "Generate", desc: "Turn the script into a captioned vertical video or avatar clip." },
      { step: "Schedule", desc: "Queue it across Reels, Shorts, and TikTok from one calendar." },
      { step: "Review", desc: "Check engagement across platforms from a single dashboard." },
    ],
    goodFit: [
      "You publish short-form video regularly and want to cut editing time",
      "You want one Bio Page instead of juggling three link tools",
      "You post to more than one platform and want a shared calendar",
    ],
    recommendedPlan: "Starter",
  },
  {
    id: "small-businesses",
    title: "Small Businesses & Brands",
    subtitle: "Keep a consistent, on-brand social presence without hiring a full-time agency.",
    badge: "E-commerce & Local Brands",
    icon: <HiBuildingStorefront className="w-6 h-6 text-pink-400" />,
    heroText:
      "Staying visible takes consistency, not a big team. KreatorAI turns product photos and announcements into promo videos, carousels, and a weekly social calendar, all pulled from one brand kit.",
    features: [
      {
        title: "Canva & Brand Asset Kit Sync",
        desc: "Store your logos, fonts, and colour palette once, then pull them into every generated post automatically.",
        highlights: ["Unified brand kits", "Canva & Figma import", "Consistent visual identity"],
      },
      {
        title: "Content Repurposing",
        desc: "Turn one blog post or product update into a caption, a thread, a carousel, and a short promo script.",
        highlights: ["One-click reformatting", "Platform-specific tone", "Ready-to-post captions"],
      },
      {
        title: "Inbuilt AI Marketing Assistant",
        desc: "Ask for campaign angles, seasonal promo ideas, or a caption rewrite in your brand's voice, any time.",
        highlights: ["Seasonal campaign prompts", "Caption polish", "Industry-aware suggestions"],
      },
    ],
    workflow: [
      { step: "Upload", desc: "Add a product photo or announcement and your brand kit." },
      { step: "Repurpose", desc: "Generate a caption, carousel, and short promo video from it." },
      { step: "Schedule", desc: "Fill the week's calendar across IG, LinkedIn, and Pinterest." },
      { step: "Track", desc: "Watch reach and engagement from the unified dashboard." },
    ],
    goodFit: [
      "You want a repeatable weekly posting rhythm without extra headcount",
      "You already have a logo, colours, and product photos to work from",
      "You post the same update across two or more platforms",
    ],
    recommendedPlan: "Starter",
  },
  {
    id: "agencies",
    title: "Digital Agencies & Studios",
    subtitle: "Manage several client accounts with separated workspaces and a client review step.",
    badge: "Agencies & Freelance Teams",
    icon: <HiBriefcase className="w-6 h-6 text-indigo-400" />,
    heroText:
      "Running social for multiple clients gets chaotic without structure. KreatorAI gives each brand an isolated workspace, a client approval link, and role-based permissions for your team.",
    features: [
      {
        title: "Client-Isolated Workspaces",
        desc: "Keep each brand's assets, connected accounts, and content queue separated inside its own workspace.",
        highlights: ["Instant workspace switching", "Client-specific asset hubs", "Separate credit pools"],
      },
      {
        title: "Client Approval Links",
        desc: "Share a scheduled calendar with a client so they can comment on or approve posts before anything goes live.",
        highlights: ["No password sharing needed", "Comment threads on drafts", "Approval history"],
      },
      {
        title: "Higher-Volume Credit Tiers",
        desc: "Studio-tier plans scale AI credit allowances for agencies producing content across many accounts.",
        highlights: ["Higher monthly credit pool", "Priority support", "White-label export options"],
      },
    ],
    workflow: [
      { step: "Set up", desc: "Create a workspace per client with its own brand kit and accounts." },
      { step: "Produce", desc: "Draft, generate, and queue content inside that workspace." },
      { step: "Approve", desc: "Send the client a review link before anything publishes." },
      { step: "Report", desc: "Pull cross-account performance for the client update." },
    ],
    goodFit: [
      "You manage social for more than one client or brand",
      "Clients currently need to review posts before they go live",
      "Your team needs separate permissions per account or workspace",
    ],
    recommendedPlan: "Studio",
  },
  {
    id: "non-profits",
    title: "Non-Profits & Educational Orgs",
    subtitle: "Share your mission and engage your community without an enterprise budget.",
    badge: "NGOs, Schools & Community Groups",
    icon: <HiHeart className="w-6 h-6 text-emerald-400" />,
    heroText:
      "Mission-driven teams often run lean. KreatorAI keeps AI credit pricing accessible on every tier and pairs it with simple video and Bio Page tools built for storytelling and outreach.",
    features: [
      {
        title: "Storytelling Scripts",
        desc: "Generate campaign scripts and hooks aimed at awareness, volunteer sign-ups, or donation drives.",
        highlights: ["Campaign script prompts", "Multi-platform adaptation", "Plain-language tone options"],
      },
      {
        title: "Community & Event Bio Pages",
        desc: "Build a Bio Page for an event or fundraiser with donation links, a signup form, and a video update.",
        highlights: ["Donation link embeds", "Volunteer signup forms", "Mobile-first layout"],
      },
      {
        title: "Accessible Credit Pricing",
        desc: "A generous free tier plus discounted annual pricing, so budget doesn't gate access to the tools.",
        highlights: ["Free tier: 25 credits/mo", "Discounted annual billing", "No credit card required to start"],
      },
    ],
    workflow: [
      { step: "Plan", desc: "Draft a campaign hook and script with the AI assistant." },
      { step: "Produce", desc: "Turn it into a short video with voiceover and captions." },
      { step: "Publish", desc: "Post it and route traffic to an event or donation Bio Page." },
      { step: "Follow up", desc: "Check which platforms and posts drove the most traffic." },
    ],
    goodFit: [
      "You need to stretch a limited budget across content and outreach",
      "You run periodic campaigns (fundraisers, enrollment, events)",
      "You need a simple donation or signup page tied to your content",
    ],
    recommendedPlan: "Free",
  },
  {
    id: "developers",
    title: "Developers & Technical Teams",
    subtitle: "Automate social publishing with Zapier webhooks, REST APIs, and cloud storage triggers.",
    badge: "DevOps & Automation Engineers",
    icon: <HiCodeBracket className="w-6 h-6 text-cyan-400" />,
    heroText:
      "For teams that would rather script the workflow than click through it, KreatorAI supports webhook triggers, Zapier connections, and cloud folder syncing so publishing can plug into an existing pipeline.",
    features: [
      {
        title: "Zapier & Webhook Automations",
        desc: "Trigger a content generation or publishing task when a release ships, a blog post goes live, or a database event fires.",
        highlights: ["Custom webhook payloads", "Zapier app connectors", "REST API endpoints"],
      },
      {
        title: "Cloud Storage Auto-Sync",
        desc: "Auto-ingest raw media from Google Drive or Dropbox directly into your KreatorAI project library.",
        highlights: ["Google Drive & Dropbox sync", "Automatic asset indexing", "Folder monitoring"],
      },
      {
        title: "Programmatic Content Pipelines",
        desc: "Feed structured JSON or markdown into KreatorAI to generate captioned video without touching the UI.",
        highlights: ["JSON/Markdown ingestion", "Automated caption burn-in", "Headless rendering"],
      },
    ],
    workflow: [
      { step: "Trigger", desc: "A release, commit, or CMS event fires a webhook." },
      { step: "Generate", desc: "KreatorAI turns the payload into a captioned clip or post." },
      { step: "Publish", desc: "The API pushes the finished content to the queue or live." },
      { step: "Log", desc: "Pull publish status and performance back into your own tooling." },
    ],
    goodFit: [
      "You'd rather automate publishing than manage it by hand",
      "You already use Zapier, webhooks, or a REST API in your stack",
      "Your content originates from code, a CMS, or structured data",
    ],
    recommendedPlan: "Max",
  },
];

export default function MadeForPage() {
  const [selectedPersona, setSelectedPersona] = useState<string>("creators");

  const currentPersona =
    PERSONAS.find((p) => p.id === selectedPersona) || PERSONAS[0];

  return (
    <div className="min-h-screen pb-28">
      {/* ── HERO SECTION ───────────────────────────── */}
      <div className="page-hero text-center pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="kicker inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          <HiSparkles className="w-4 h-4 text-purple-400" />
          Who KreatorAI Is Made For
        </div>
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
          style={{ color: "var(--text)" }}
        >
          Tailored Workflows for Every <br className="hidden sm:inline" />
          <em className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent not-italic">
            Creator & Team
          </em>
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto font-medium"
          style={{ color: "var(--text2)" }}
        >
          Solo video creator, growing brand, agency managing several accounts, or
          mission-driven org — pick a persona to see how the workflow fits.
        </p>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
          {PERSONAS.map((p) => {
            const isActive = selectedPersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPersona(p.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 border-transparent"
                    : "bg-white/5 border border-slate-200/20 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white/10"
                }`}
              >
                {p.icon}
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── DETAILED PERSONA SHOWCASE ──────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-3xl p-8 sm:p-12 border transition-all"
          style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
        >
          {/* Header & Hero Text */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block">
              {currentPersona.badge}
            </span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text)" }}
            >
              {currentPersona.title}
            </h2>
            <p className="text-lg font-semibold mb-6 text-purple-400">
              {currentPersona.subtitle}
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text2)" }}
            >
              {currentPersona.heroText}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {currentPersona.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3
                    className="font-extrabold text-xl mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text2)" }}
                  >
                    {feat.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-200/10 dark:border-white/10">
                  {feat.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs font-bold"
                      style={{ color: "var(--p3)" }}
                    >
                      <HiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sample Workflow */}
          <div className="mb-14">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "var(--text2)" }}
            >
              A Typical Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentPersona.workflow.map((w, i) => (
                <div
                  key={i}
                  className="relative p-5 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10"
                >
                  <span
                    className="font-extrabold text-2xl opacity-15 absolute top-4 right-5"
                    style={{ fontFamily: "var(--fh)", color: "var(--text)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="font-extrabold text-sm mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {w.step}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Good Fit / Recommended Plan */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-purple-500/20 flex flex-col sm:flex-row gap-8 sm:gap-10">
            <div className="flex-1">
              <h3
                className="text-sm font-extrabold mb-4 flex items-center gap-2"
                style={{ color: "var(--text)" }}
              >
                <HiOutlineClipboardDocumentCheck className="w-5 h-5 text-purple-400" />
                This workflow is a good fit if...
              </h3>
              <ul className="space-y-2.5">
                {currentPersona.goodFit.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    <HiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start sm:items-center sm:justify-center gap-2 sm:border-l sm:pl-8" style={{ borderColor: "var(--border-p)" }}>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--text2)" }}
              >
                Recommended plan
              </span>
              <span className="px-5 py-2.5 rounded-2xl bg-purple-600 text-white font-extrabold text-lg whitespace-nowrap shadow-md">
                {currentPersona.recommendedPlan}
              </span>
              <Link
                href="/pricing"
                className="text-xs font-bold text-purple-400 hover:underline mt-1"
              >
                Compare all plans →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── ALL PERSONAS OVERVIEW MATRIX ───────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold" style={{ color: "var(--text)" }}>
            Compare Workflows Side-by-Side
          </h2>
          <p className="text-base mt-2" style={{ color: "var(--text2)" }}>
            See how KreatorAI fits each use case at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAS.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedPersona(p.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02] ${
                selectedPersona === p.id
                  ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                  : "border-slate-200/10 dark:border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10">{p.icon}</div>
                <h3 className="font-extrabold text-lg" style={{ color: "var(--text)" }}>
                  {p.title}
                </h3>
              </div>
              <p
                className="text-xs line-clamp-3 leading-relaxed mb-4"
                style={{ color: "var(--text2)" }}
              >
                {p.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(124,77,255,.12)", color: "var(--p3)" }}
                >
                  {p.recommendedPlan} plan
                </span>
                <span className="text-xs font-bold text-purple-400 hover:underline inline-flex items-center gap-1">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="cta-b">
          <div>
            <h2>
              Ready to Elevate Your <em>Creative Workflow</em>?
            </h2>
            <p>Start free today — no credit card needed.</p>
          </div>
          <div className="cta-b-btns">
            <a
              href="https://app.kreatoraistudio.com"
              className="btn btn-p"
              target="_blank"
              rel="noopener noreferrer"
            >
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
