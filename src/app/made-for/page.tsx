"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  HiSparkles, 
  HiUserGroup, 
  HiBuildingStorefront, 
  HiBriefcase, 
  HiHeart, 
  HiCodeBracket,
  HiCheckCircle
} from "react-icons/hi2";
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaXTwitter, FaDropbox, FaGoogleDrive } from "react-icons/fa6";
import { TbBrandOpenai, TbBrandZapier, TbBrandCanva } from "react-icons/tb";

interface PersonaSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: JSX.Element;
  gradient: string;
  heroText: string;
  features: {
    title: string;
    desc: string;
    highlights: string[];
  }[];
  caseStudy: {
    quote: string;
    author: string;
    role: string;
    metric: string;
  };
}

const PERSONAS: PersonaSection[] = [
  {
    id: "creators",
    title: "Creators & Influencers",
    subtitle: "Produce 10x more content without burning out or spending hours in editing software.",
    badge: "Solo Creators & Video Artists",
    icon: <HiSparkles className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500 to-pink-500",
    heroText: "Stop letting video editing and caption writing eat up 30 hours a week. KreatorAI acts as your full production studio — generating viral hooks, shot scripts, AI avatar presenters, auto-captions, and publishing to Reels, Shorts, and TikTok simultaneously.",
    features: [
      {
        title: "Faceless & AI Avatar Video Creation",
        desc: "Turn written scripts into 4K vertical videos automatically with stock B-roll, ElevenLabs audio, and HeyGen digital twin avatars.",
        highlights: ["Auto B-roll assembly", "Custom voice cloning", "9:16 vertical HD export"]
      },
      {
        title: "High-Converting Link-in-Bio Pages",
        desc: "Convert social views into newsletter subscribers and digital product sales with customizable Bio Pages.",
        highlights: ["Custom domain support", "Instant video embeds", "Real-time traffic analytics"]
      },
      {
        title: "Cross-Platform One-Click Publisher",
        desc: "Schedule once and publish everywhere — Instagram, TikTok, YouTube Shorts, X (Twitter), and Threads from a single calendar.",
        highlights: ["Drag-and-drop calendar", "Best time-to-post recommendations", "Auto-hashtags & captions"]
      }
    ],
    caseStudy: {
      quote: "KreatorAI allowed me to scale from 2 videos a week to 14 Shorts and Reels weekly. My total audience grew by 140k in 3 months.",
      author: "Alex Rivera",
      role: "Tech & Creator Economy Host",
      metric: "14x Content Output"
    }
  },
  {
    id: "small-businesses",
    title: "Small Businesses & Brands",
    subtitle: "Maintain a professional, active social presence that drives leads without hiring an expensive agency.",
    badge: "E-commerce & Local Brands",
    icon: <HiBuildingStorefront className="w-6 h-6 text-pink-400" />,
    gradient: "from-pink-500 to-rose-500",
    heroText: "Building brand authority requires consistency. KreatorAI enables small businesses to turn product photos and announcements into engaging promo videos, product showcases, and weekly social calendars on total autopilot.",
    features: [
      {
        title: "Canva & Brand Asset Kit Sync",
        desc: "Keep all brand logos, font styles, and color palettes organized. Import Canva graphics directly into your scheduled posts.",
        highlights: ["Unified Brand Kits", "Direct Canva & Figma import", "Consistent visual identity"]
      },
      {
        title: "Automated Content Repurposing",
        desc: "Turn one blog post or product update into 5 tweet threads, an Instagram carousel caption, a LinkedIn article, and a promo script.",
        highlights: ["One-click multi-format rewrite", "SEO-optimized captions", "E-commerce CTA hooks"]
      },
      {
        title: "Inbuilt AI Marketing Assistant",
        desc: "Get 24/7 strategic marketing advice, promotional campaign ideas, and caption polish tailored to your industry niche.",
        highlights: ["Seasonal campaign planner", "Competitor angle analyzer", "Conversion-focused copy"]
      }
    ],
    caseStudy: {
      quote: "We went from posting once every two weeks to maintaining an active daily presence on IG, LinkedIn, and Pinterest. Our inbound leads doubled.",
      author: "Elena Rostova",
      role: "Founder, Velvet Glow Skincare",
      metric: "2x Inbound Leads"
    }
  },
  {
    id: "agencies",
    title: "Digital Agencies & Studios",
    subtitle: "Manage multiple client accounts with structured workspaces, client review portals, and team roles.",
    badge: "Agencies & Freelance Teams",
    icon: <HiBriefcase className="w-6 h-6 text-indigo-400" />,
    gradient: "from-indigo-500 to-cyan-500",
    heroText: "Managing social campaigns for 10+ clients gets chaotic fast. KreatorAI provides dedicated isolated workspaces per brand, client approval portals, multi-user permissions, and white-label export capabilities.",
    features: [
      {
        title: "Client-Isolated Workspaces",
        desc: "Keep each brand's assets, connected accounts, content queues, and team members strictly separated.",
        highlights: ["Instant workspace switching", "Separate billing & credit pools", "Client-specific asset hubs"]
      },
      {
        title: "Live Post Approval Threads",
        desc: "Share scheduled calendars with clients. Clients can comment, request changes, or approve posts before live publishing.",
        highlights: ["No password sharing needed", "Interactive client review link", "Audit trail of approvals"]
      },
      {
        title: "High-Capacity Credit Bundles",
        desc: "Scale production with studio credit tiers and custom SLA guarantees designed for high-volume content operations.",
        highlights: ["Up to 2,250+ credits/mo", "Dedicated account support", "Custom white-label options"]
      }
    ],
    caseStudy: {
      quote: "KreatorAI eliminated our back-and-forth email approvals. Our team manages 18 client accounts in half the time.",
      author: "Marcus Chen",
      role: "Creative Director, Apex Social Media Agency",
      metric: "18 Accounts Managed"
    }
  },
  {
    id: "non-profits",
    title: "Non-Profits & Educational Orgs",
    subtitle: "Amplify your mission, share high-impact stories, and engage your community on an accessible budget.",
    badge: "NGOs, Schools & Community Groups",
    icon: <HiHeart className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-500 to-teal-500",
    heroText: "Non-profits need to maximize impact on lean budgets. KreatorAI provides accessible AI credit tiers and intuitive video storytelling tools so cause-based organizations can broadcast their mission everywhere.",
    features: [
      {
        title: "High-Impact Storytelling Scripts",
        desc: "Generate emotionally compelling story hooks and campaign scripts designed to drive donations, volunteers, and awareness.",
        highlights: ["Donor campaign templates", "Emotional hook frameworks", "Multi-platform adaptations"]
      },
      {
        title: "Community Bio Link & Event Pages",
        desc: "Build dedicated event registration and donation Bio Pages with embedded video updates and instant call-to-action buttons.",
        highlights: ["Donation link embeds", "Volunteer signup forms", "Mobile-first layout"]
      },
      {
        title: "Accessible Credit Pricing",
        desc: "Generous credit allowances on all tiers ensuring non-profits get studio-quality AI tools without enterprise pricing.",
        highlights: ["Free tier with 25 cr/mo", "Discounted annual plans", "No credit card needed"]
      }
    ],
    caseStudy: {
      quote: "We created 10 campaign videos for our annual fundraiser using AI voiceovers and B-roll. We reached 50,000 new donors.",
      author: "Sarah Jenkins",
      role: "Communications Lead, EcoWorld Foundation",
      metric: "50k Donors Reached"
    }
  },
  {
    id: "developers",
    title: "Developers & Technical Teams",
    subtitle: "Automate social publishing pipelines via Zapier Webhooks, REST APIs, and Cloud Storage triggers.",
    badge: "DevOps & Automation Engineers",
    icon: <HiCodeBracket className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500 to-blue-500",
    heroText: "Prefer code over manual clicks? KreatorAI integrates seamlessly into developer workflows — supporting Cloud Drive auto-sync, Webhooks, Zapier integrations, and automated RSS-to-social pipelines.",
    features: [
      {
        title: "Zapier & Webhook Automations",
        desc: "Trigger social post generations or publishing tasks automatically whenever new code is pushed, blogs are published, or DB events occur.",
        highlights: ["Custom Webhook payloads", "Zapier 5,000+ app connectors", "RESTful API endpoints"]
      },
      {
        title: "Cloud Storage Auto-Sync",
        desc: "Auto-ingest raw media assets from Google Drive, Dropbox, or S3 buckets directly into your KreatorAI project library.",
        highlights: ["Google Drive & Dropbox sync", "Automatic asset indexing", "Cloud folder monitoring"]
      },
      {
        title: "Programmatic AI Content Pipelines",
        desc: "Feed structured JSON data or markdown scripts into KreatorAI to auto-generate captioned short videos programmatically.",
        highlights: ["JSON/Markdown ingestion", "Automated caption burn-in", "Headless video rendering"]
      }
    ],
    caseStudy: {
      quote: "We set up a Zapier workflow that turns our release notes into tweet threads and video announcements automatically. Pure magic.",
      author: "David Vance",
      role: "Head of Growth Engineering, CloudPulse Tech",
      metric: "100% Automated Releases"
    }
  }
];

export default function MadeForPage() {
  const [selectedPersona, setSelectedPersona] = useState<string>("creators");

  const currentPersona = PERSONAS.find(p => p.id === selectedPersona) || PERSONAS[0];

  return (
    <div className="min-h-screen pb-28">
      {/* ── HERO SECTION ───────────────────────────── */}
      <div className="page-hero text-center pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="kicker inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          <HiSparkles className="w-4 h-4 text-purple-400" />
          Who KreatorAI Is Made For
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>
          Tailored Workflows for Every <br className="hidden sm:inline" />
          <em className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent not-italic">
            Creator & Team
          </em>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto font-medium" style={{ color: "var(--text2)" }}>
          Whether you're a solo video creator, a fast-growing brand, a digital agency managing 20 accounts, or a non-profit organization.
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
        <div className="rounded-3xl p-8 sm:p-12 border transition-all" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
          
          {/* Header & Hero Text */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block">
              {currentPersona.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
              {currentPersona.title}
            </h2>
            <p className="text-lg font-semibold mb-6 text-purple-400">
              {currentPersona.subtitle}
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text2)" }}>
              {currentPersona.heroText}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {currentPersona.features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border bg-white/5 dark:bg-white/5 border-slate-200/10 dark:border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl mb-3" style={{ color: "var(--text)" }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                    {feat.desc}
                  </p>
                </div>
                
                <ul className="space-y-2 pt-4 border-t border-slate-200/10 dark:border-white/10">
                  {feat.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--p3)" }}>
                      <HiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Case Study / Testimonial Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <blockquote className="text-base sm:text-lg font-bold italic mb-2" style={{ color: "var(--text)" }}>
                "{currentPersona.caseStudy.quote}"
              </blockquote>
              <div className="text-xs font-semibold text-purple-400">
                — {currentPersona.caseStudy.author}, <span style={{ color: "var(--text2)" }}>{currentPersona.caseStudy.role}</span>
              </div>
            </div>
            
            <div className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-extrabold text-lg sm:text-xl text-center whitespace-nowrap shadow-md">
              {currentPersona.caseStudy.metric}
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
            See how KreatorAI solves specific problems for each use case.
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
                <h3 className="font-extrabold text-lg" style={{ color: "var(--text)" }}>{p.title}</h3>
              </div>
              <p className="text-xs line-clamp-3 leading-relaxed mb-4" style={{ color: "var(--text2)" }}>
                {p.subtitle}
              </p>
              <span className="text-xs font-bold text-purple-400 hover:underline inline-flex items-center gap-1">
                Explore Workflow →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="cta-b">
          <div>
            <h2>Ready to Elevate Your <em>Creative Workflow</em>?</h2>
            <p>Start free today — no credit card needed.</p>
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
