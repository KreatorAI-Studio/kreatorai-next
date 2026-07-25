import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import WorkspaceHero from "@/components/WorkspaceHero";
import {
  HiSparkles,
  HiVideoCamera,
  HiCheckCircle,
  HiOutlinePencilSquare,
  HiOutlineRocketLaunch,
  HiOutlineChartBarSquare,
  HiXMark,
} from "react-icons/hi2";
import {
  FaFigma,
  FaGoogleDrive,
  FaDropbox,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { TbBrandOpenai, TbBrandZapier, TbBrandThreads } from "react-icons/tb";

export default function Home() {
  return (
    <>
      {/* ── HERO WORKSPACE WITH FLOATING LOGOS ───────── */}
      <WorkspaceHero />

      {/* ── STATS STRIP ───────────────────────────── */}
      <ScrollReveal className="wrap pb-20 relative z-10">
        <div className="stats-strip" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">AI Creation Tools</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Connected Platforms</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5,000+</div>
            <div className="stat-label">Zapier App Connections</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">&lt;2 min</div>
            <div className="stat-label">To Launch a Bio Page</div>
          </div>
        </div>
      </ScrollReveal>

      <div className="divl"></div>

      {/* ── LOGO / INTEGRATIONS STRIP ───────────────── */}
      <section className="relative z-10 py-14">
        <div className="wrap">
          <ScrollReveal className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--text2)" }}
            >
              Works with the tools you already use
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {[
                { Icon: FaInstagram, color: "#E4405F" },
                { Icon: FaLinkedin, color: "#0A66C2" },
                { Icon: FaXTwitter, color: "var(--text)" },
                { Icon: FaYoutube, color: "#FF0000" },
                { Icon: FaTiktok, color: "#FE2C55" },
                { Icon: FaFacebook, color: "#1877F2" },
                { Icon: TbBrandThreads, color: "var(--text)" },
                { Icon: FaPinterest, color: "#E60023" },
                { Icon: FaFigma, color: "#F24E1E" },
                { Icon: FaGoogleDrive, color: "#4285F4" },
                { Icon: FaDropbox, color: "#0061FF" },
                { Icon: TbBrandZapier, color: "#FF4F00" },
                { Icon: TbBrandOpenai, color: "#10A37F" },
              ].map(({ Icon, color }, i) => (
                <span
                  key={i}
                  className="integ-icon"
                  style={{
                    // @ts-ignore custom property for hover colour
                    "--brand": color,
                    animationDelay: `${i * 0.18}s`,
                  }}
                >
                  <Icon className="w-7 h-7" />
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── CORE CAPABILITIES HIGHLIGHTS ───────────── */}
      <section className="tools-sec relative z-10">
        <div className="wrap">
          <ScrollReveal className="tools-hd">
            <div className="kicker" style={{ justifyContent: "center" }}>
              All-In-One Creator Suite
            </div>
            <h2 className="sh" style={{ textAlign: "center" }}>
              Create, Publish & Scale — <em>All In One</em>
            </h2>
            <p
              className="sp mx-auto"
              style={{ textAlign: "center", maxWidth: "560px", marginTop: "12px" }}
            >
              Everything modern creators, brands, and agencies need to streamline content
              production — from first idea to published post to performance report.
            </p>
          </ScrollReveal>

          <div className="tgrid mt-12 relative z-10">
            <ScrollReveal delay={0.05} className="tc">
              <span className="tc-icon">🎭</span>
              <div className="tc-name">Faceless Video & AI Avatars</div>
              <div className="tc-desc">
                Generate complete vertical videos with AI scene pipelines or present your
                content using HeyGen digital twin avatars.
              </div>
              <span className="tc-badge badge-pro">Pro Studio</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="tc">
              <span className="tc-icon">🔗</span>
              <div className="tc-name">Canva, Figma & Zapier Sync</div>
              <div className="tc-desc">
                Connect your design tools, Claude & ChatGPT LLMs, Google Drive footage,
                and Zapier automated webhooks seamlessly.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="tc">
              <span className="tc-icon">🌐</span>
              <div className="tc-name">Custom Bio Page Creator</div>
              <div className="tc-desc">
                Build high-converting Link-in-Bio landing pages with custom domain
                support, rich media embeds, and click analytics.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="tc">
              <span className="tc-icon">👥</span>
              <div className="tc-name">Multi-User Team Collab</div>
              <div className="tc-desc">
                Invite client reviewers and editors, set custom role permissions, share
                brand asset kits, and approve posts live.
              </div>
              <span className="tc-badge badge-pro">Pro & Studio</span>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="tc">
              <span className="tc-icon">🤖</span>
              <div className="tc-name">Inbuilt AI Assistant</div>
              <div className="tc-desc">
                Your 24/7 conversational co-pilot for viral script hooks, caption
                rewrites, promotional angles, and strategy.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="tc">
              <span className="tc-icon">📅</span>
              <div className="tc-name">Multi-Platform Publisher</div>
              <div className="tc-desc">
                Schedule and auto-publish content to Instagram, LinkedIn, X, YouTube,
                TikTok, Facebook, Threads & Pinterest.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="tc">
              <span className="tc-icon">✂️</span>
              <div className="tc-name">Long Video → Shorts Clipper</div>
              <div className="tc-desc">
                Drop in a podcast or YouTube link and let AI find the strongest moments,
                cut them to 9:16, and caption them automatically.
              </div>
              <span className="tc-badge badge-pro">Pro Studio</span>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="tc">
              <span className="tc-icon">📊</span>
              <div className="tc-name">Cross-Platform Analytics</div>
              <div className="tc-desc">
                Compare reach, engagement, and follower growth across every connected
                account from one unified dashboard.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.45} className="tc">
              <span className="tc-icon">🗂️</span>
              <div className="tc-name">Brand Asset Library</div>
              <div className="tc-desc">
                Store logos, fonts, colour palettes, and voice presets in one place so
                every generated asset stays on-brand.
              </div>
              <span className="tc-badge badge-pro">Pro & Studio</span>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5} className="text-center mt-10">
            <Link href="/services" className="btn btn-s">
              Explore All 20+ Tools & Features →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-20 relative z-10">
        <div className="wrap">
          <ScrollReveal className="text-center mb-14">
            <div className="kicker" style={{ justifyContent: "center" }}>
              Simple Workflow
            </div>
            <h2 className="sh text-center">
              From Idea To Published Post <em>In Minutes</em>
            </h2>
            <p className="sp mx-auto text-center max-w-xl">
              No steep learning curve. KreatorAI is built as one continuous workflow, not
              five disconnected apps stitched together.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <HiOutlinePencilSquare className="w-6 h-6" />,
                step: "01",
                title: "Brainstorm & Draft",
                desc: "Prompt the AI assistant for hooks, scripts, and captions, or import a brief from Canva or Google Drive.",
              },
              {
                icon: <HiVideoCamera className="w-6 h-6" />,
                step: "02",
                title: "Generate & Edit",
                desc: "Turn scripts into faceless videos or avatar presentations, then fine-tune captions, voice, and pacing.",
              },
              {
                icon: <HiOutlineRocketLaunch className="w-6 h-6" />,
                step: "03",
                title: "Schedule & Publish",
                desc: "Drop finished content into the unified calendar and auto-publish across every connected platform.",
              },
              {
                icon: <HiOutlineChartBarSquare className="w-6 h-6" />,
                step: "04",
                title: "Track & Improve",
                desc: "Review cross-platform analytics and let the AI assistant suggest what to create next.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div
                  className="relative p-7 rounded-2xl border h-full"
                  style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
                >
                  <span
                    className="absolute top-5 right-6 font-extrabold text-3xl opacity-10"
                    style={{ fontFamily: "var(--fh)", color: "var(--text)" }}
                  >
                    {item.step}
                  </span>
                  <div
                    className="inline-flex p-3 rounded-xl mb-5"
                    style={{ background: "rgba(124,77,255,.12)", color: "var(--p2)" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-lg mb-2" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── WHY KREATORAI / COMPARISON ─────────────────── */}
      <section className="py-20 relative z-10">
        <div className="wrap">
          <ScrollReveal className="text-center mb-14">
            <div className="kicker" style={{ justifyContent: "center" }}>
              Why Teams Switch
            </div>
            <h2 className="sh text-center">
              One Workspace <em>Instead Of Five Subscriptions</em>
            </h2>
            <p className="sp mx-auto text-center max-w-xl">
              Most creators piece together a script tool, a video generator, a scheduler,
              a link-in-bio app, and an analytics dashboard. KreatorAI replaces the stack.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal
              delay={0.05}
              className="p-8 rounded-2xl border"
              style={{ background: "var(--card-solid)", borderColor: "var(--border)" }}
            >
              <h3
                className="font-bold text-base mb-5 flex items-center gap-2"
                style={{ color: "var(--text2)" }}
              >
                <HiXMark className="w-5 h-5 text-rose-400" />
                The Old Way
              </h3>
              <ul className="space-y-4 text-sm" style={{ color: "var(--text2)" }}>
                <li>Separate logins for scripting, video, scheduling, and bio pages</li>
                <li>Manually re-exporting and re-uploading files between tools</li>
                <li>Juggling several monthly subscriptions with overlapping features</li>
                <li>Analytics scattered across each platform's native dashboard</li>
                <li>No shared brand kit, so every tool needs re-briefing</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal
              delay={0.15}
              className="p-8 rounded-2xl border relative overflow-hidden"
              style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
            >
              <div
                className="absolute inset-0 opacity-[.06] pointer-events-none"
                style={{ background: "var(--grad)" }}
              ></div>
              <h3 className="font-bold text-base mb-5 flex items-center gap-2 relative" style={{ color: "var(--text)" }}>
                <HiCheckCircle className="w-5 h-5 text-emerald-400" />
                The KreatorAI Way
              </h3>
              <ul className="space-y-4 text-sm relative" style={{ color: "var(--text2)" }}>
                <li>One login, one workspace, one brand kit for every tool</li>
                <li>Assets move between script, video, and scheduler automatically</li>
                <li>A single plan covers creation, publishing, and analytics</li>
                <li>Cross-platform performance in one unified dashboard</li>
                <li>Team and client permissions managed from one place</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── MADE FOR PREVIEW SECTION ────────────────── */}
      <section className="py-20 relative z-10">
        <div className="wrap">
          <ScrollReveal className="text-center mb-12">
            <div className="kicker" style={{ justifyContent: "center" }}>
              Tailored Solutions
            </div>
            <h2 className="sh text-center">
              Who KreatorAI Is <em>Made For</em>
            </h2>
            <p className="sp mx-auto text-center max-w-xl">
              Customized workflows engineered specifically for your role and goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScrollReveal
              delay={0.1}
              className="p-8 rounded-2xl border"
              style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
            >
              <div className="text-3xl mb-4">📹</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>
                Creators & Influencers
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Automate short-form video production, generate viral hooks, clone your
                voice, and convert views with custom Bio Pages.
              </p>
              <Link
                href="/made-for"
                className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1"
              >
                Explore Creator Workflow →
              </Link>
            </ScrollReveal>

            <ScrollReveal
              delay={0.18}
              className="p-8 rounded-2xl border"
              style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
            >
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>
                Small Businesses
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Maintain an active social media presence on total autopilot. Sync Canva
                graphics and repurpose blog updates into multi-platform campaigns.
              </p>
              <Link
                href="/made-for"
                className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1"
              >
                Explore Business Workflow →
              </Link>
            </ScrollReveal>

            <ScrollReveal
              delay={0.26}
              className="p-8 rounded-2xl border"
              style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
            >
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>
                Agencies & Studios
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Manage 20+ client brands in isolated workspaces with live client approval
                portals, team permissions, and bulk scheduling.
              </p>
              <Link
                href="/made-for"
                className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1"
              >
                Explore Agency Workflow →
              </Link>
            </ScrollReveal>

            <ScrollReveal
              delay={0.34}
              className="p-8 rounded-2xl border"
              style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
            >
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>
                Marketing Teams
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Keep campaigns on-brand with a shared asset library, route posts through
                approval workflows, and report on performance in one dashboard.
              </p>
              <Link
                href="/made-for"
                className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1"
              >
                Explore Team Workflow →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── FEATURE SPOTLIGHT: AI ASSISTANT ─────────────── */}
      <section className="py-20 relative z-10">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="kicker">Featured Tool</div>
              <h2 className="sh mt-3">
                Your 24/7 <em>Strategy Co-Pilot</em>
              </h2>
              <p className="sp mt-4 max-w-lg">
                The inbuilt AI assistant sits inside every part of KreatorAI — ready to
                brainstorm hooks, rewrite copy for a specific platform, or explain what
                your analytics are telling you.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Generate viral video angles and hooks on demand",
                  "Rewrite captions for X, LinkedIn, or TikTok tone instantly",
                  "Get posting-frequency and hashtag recommendations",
                  "Ask questions about your own performance data",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text2)" }}>
                    <HiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--p2)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn btn-s mt-8 inline-flex">
                See the AI Assistant in Action →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div
                className="rounded-3xl border p-6"
                style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "var(--grad)" }}
                  >
                    <HiSparkles className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text2)" }}>
                    Assistant
                  </span>
                </div>
                <div className="space-y-3">
                  <div
                    className="ml-auto max-w-[80%] p-3 rounded-2xl rounded-tr-sm text-sm"
                    style={{ background: "rgba(124,77,255,.15)", color: "var(--text)" }}
                  >
                    Give me 5 viral hooks for a productivity app launch
                  </div>
                  <div
                    className="max-w-[85%] p-3 rounded-2xl rounded-tl-sm text-sm"
                    style={{ background: "rgba(255,255,255,.05)", color: "var(--text2)" }}
                  >
                    Here are 5 hooks built around curiosity and stakes — want me to turn
                    any of these into a full 30-second script?
                  </div>
                  <div
                    className="ml-auto max-w-[80%] p-3 rounded-2xl rounded-tr-sm text-sm"
                    style={{ background: "rgba(124,77,255,.15)", color: "var(--text)" }}
                  >
                    Yes — make it feel native to TikTok
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="faq relative z-10">
        <div className="wrap">
          <ScrollReveal className="faq-hd">
            <div className="kicker" style={{ justifyContent: "center" }}>
              FAQ
            </div>
            <h2 className="sh text-center">
              Questions? <em>Answered.</em>
            </h2>
            <p className="sp mx-auto text-center mt-3 max-w-[340px]">
              Everything you need to know about KreatorAI.
            </p>
          </ScrollReveal>

          <div className="fgrid2">
            {[
              {
                q: "Is KreatorAI free to use?",
                a: "Yes — our Free plan requires no credit card and gives you 25 AI credits per month, access to all text generators, and one free project. Upgrade anytime to Starter ($29/mo) for 250 credits, or Max ($89/mo) for 800.",
              },
              {
                q: "Which integrations are supported?",
                a: "KreatorAI integrates directly with Canva, Figma, Claude 3.5 Sonnet, OpenAI, Google Drive, Dropbox, and Zapier Webhooks for automated social workflows.",
              },
              {
                q: "How does the Bio Page Creator work?",
                a: "You can build a custom Link-in-Bio landing page in under 2 minutes. Customize colors, add video & audio embeds, connect custom domains, and track click analytics.",
              },
              {
                q: "Can I collaborate with my team or clients?",
                a: "Yes! Multi-user team workspaces allow you to invite editors, client reviewers, and brand managers with custom permission roles and live post approval threads.",
              },
              {
                q: "Which social platforms can I publish to?",
                a: "Instagram, LinkedIn, X (Twitter), YouTube Shorts, TikTok, Facebook, Threads, and Pinterest — schedule or auto-publish to all of them from one unified calendar.",
              },
              {
                q: "Can I use generated content commercially?",
                a: "Absolutely. Everything generated by KreatorAI is 100% yours — for social media, brand campaigns, client work, or commercial monetization with zero restrictions.",
              },
              {
                q: "Do I need editing experience to make videos?",
                a: "No. The faceless video pipeline and AI avatar tools handle scene assembly, voiceover, and captions automatically — you can generate a finished vertical video from a script alone.",
              },
              {
                q: "Can agencies manage multiple client brands?",
                a: "Yes. Studio-tier workspaces support isolated brand environments, so agencies can keep client assets, calendars, and approvals fully separated while managing everything from one account.",
              },
              {
                q: "What happens if I run out of AI credits?",
                a: "You can upgrade your plan at any time to raise your monthly credit limit, or purchase a top-up. Unused scheduling and publishing features are never blocked by credits.",
              },
              {
                q: "Is there a limit to how many social accounts I can connect?",
                a: "Free and Starter plans support a set number of connected accounts per platform; Max and Studio plans raise those limits significantly. Full details are on the pricing page.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={0.06 * i} className="fi !h-auto">
                <details className="w-full group">
                  <summary className="fq marker:content-[''] list-none">
                    {faq.q}
                    <span className="fqi group-open:bg-p1 group-open:border-p1 group-open:rotate-45 transition-all"></span>
                  </summary>
                  <div className="fa-in mt-2 pb-5">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <ScrollReveal delay={0.2} className="relative z-10 w-full max-w-[1160px] mx-auto px-12">
        <div className="cta-b mt-20 mb-28">
          <div className="cta-b-left">
            <h2>
              Ready to Create <em>Faster</em>?
            </h2>
            <p className="mt-2">Start free — no card needed.</p>
          </div>
          <div className="cta-b-btns mt-6 lg:mt-0">
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
      </ScrollReveal>
    </>
  );
}
