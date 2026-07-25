import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import WorkspaceHero from "@/components/WorkspaceHero";
import { 
  HiSparkles, 
  HiUserGroup, 
  HiLink, 
  HiCalendar, 
  HiChartBar, 
  HiVideoCamera,
  HiCpuChip,
  HiCheckCircle,
  HiArrowRight
} from "react-icons/hi2";
import { FaFigma, FaGoogleDrive, FaDropbox, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import { TbBrandOpenai, TbBrandZapier, TbBrandThreads } from "react-icons/tb";

export default function Home() {
  return (
    <>
      {/* ── HERO WORKSPACE WITH FLOATING LOGOS ───────── */}
      <WorkspaceHero />

      {/* ── STATS STRIP ───────────────────────────── */}
      <ScrollReveal className="wrap pb-20 relative z-10">
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">AI Creation Tools</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Connected Platforms</div>
          </div>
        </div>
      </ScrollReveal>

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
            <p className="sp mx-auto" style={{ textAlign: "center", maxWidth: "560px", marginTop: "12px" }}>
              Everything modern creators, brands, and agencies need to streamline content production.
            </p>
          </ScrollReveal>
          
          <div className="tgrid mt-12 relative z-10">
            <ScrollReveal delay={0.07} className="tc">
              <span className="tc-icon">🎭</span>
              <div className="tc-name">Faceless Video & AI Avatars</div>
              <div className="tc-desc">
                Generate complete vertical videos with AI scene pipelines or present your content using HeyGen digital twin avatars.
              </div>
              <span className="tc-badge badge-pro">Pro Studio</span>
            </ScrollReveal>

            <ScrollReveal delay={0.14} className="tc">
              <span className="tc-icon">🔗</span>
              <div className="tc-name">Canva, Figma & Zapier Sync</div>
              <div className="tc-desc">
                Connect your design tools, Claude & ChatGPT LLMs, Google Drive footage, and Zapier automated Webhooks seamlessly.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.21} className="tc">
              <span className="tc-icon">🌐</span>
              <div className="tc-name">Custom Bio Page Creator</div>
              <div className="tc-desc">
                Build high-converting Link-in-Bio landing pages with custom domain support, rich media embeds, and click analytics.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.28} className="tc">
              <span className="tc-icon">👥</span>
              <div className="tc-name">Multi-User Team Collab</div>
              <div className="tc-desc">
                Invite client reviewers and editors, set custom role permissions, share brand asset kits, and approve posts live.
              </div>
              <span className="tc-badge badge-pro">Pro & Studio</span>
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="tc">
              <span className="tc-icon">🤖</span>
              <div className="tc-name">Inbuilt AI Assistant</div>
              <div className="tc-desc">
                Your 24/7 conversational co-pilot for viral script hooks, caption rewrites, promotional angles, and strategy.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
            </ScrollReveal>

            <ScrollReveal delay={0.42} className="tc">
              <span className="tc-icon">📅</span>
              <div className="tc-name">Multi-Platform Publisher</div>
              <div className="tc-desc">
                Schedule and auto-publish content to Instagram, LinkedIn, X, YouTube, TikTok, Facebook, Threads & Pinterest.
              </div>
              <span className="tc-badge badge-free">All Plans</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1} className="p-8 rounded-2xl border" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
              <div className="text-3xl mb-4">📹</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>Creators & Influencers</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Automate short-form video production, generate viral hooks, clone your voice, and convert views with custom Bio Pages.
              </p>
              <Link href="/made-for" className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                Explore Creator Workflow →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="p-8 rounded-2xl border" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>Small Businesses</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Maintain an active social media presence on total autopilot. Sync Canva graphics and repurpose blog updates into multi-platform campaigns.
              </p>
              <Link href="/made-for" className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                Explore Business Workflow →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="p-8 rounded-2xl border" style={{ background: "var(--card-solid)", borderColor: "var(--border-p)" }}>
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: "var(--text)" }}>Agencies & Studios</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                Manage 20+ client brands in isolated workspaces with live client approval portals, team permissions, and bulk scheduling.
              </p>
              <Link href="/made-for" className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                Explore Agency Workflow →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divl"></div>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="faq relative z-10">
        <div className="wrap">
          <ScrollReveal className="faq-hd">
            <div className="kicker" style={{ justifyContent: "center" }}>FAQ</div>
            <h2 className="sh text-center">Questions? <em>Answered.</em></h2>
            <p className="sp mx-auto text-center mt-3 max-w-[340px]">
              Everything you need to know about KreatorAI.
            </p>
          </ScrollReveal>
          
          <div className="fgrid2">
            {[
              {
                q: "Is KreatorAI free to use?",
                a: "Yes — our Free plan requires no credit card and gives you 25 AI credits per month, access to all text generators, and one free project. Upgrade anytime to Starter ($29/mo) for 250 credits, or Max ($89/mo) for 800."
              },
              {
                q: "Which integrations are supported?",
                a: "KreatorAI integrates directly with Canva, Figma, Claude 3.5 Sonnet, OpenAI, Google Drive, Dropbox, and Zapier Webhooks for automated social workflows."
              },
              {
                q: "How does the Bio Page Creator work?",
                a: "You can build a custom Link-in-Bio landing page in under 2 minutes. Customize colors, add video & audio embeds, connect custom domains, and track click analytics."
              },
              {
                q: "Can I collaborate with my team or clients?",
                a: "Yes! Multi-user team workspaces allow you to invite editors, client reviewers, and brand managers with custom permission roles and live post approval threads."
              },
              {
                q: "Which social platforms can I publish to?",
                a: "Instagram, LinkedIn, X (Twitter), YouTube Shorts, TikTok, Facebook, Threads, and Pinterest — schedule or auto-publish to all of them from one unified calendar."
              },
              {
                q: "Can I use generated content commercially?",
                a: "Absolutely. Everything generated by KreatorAI is 100% yours — for social media, brand campaigns, client work, or commercial monetization with zero restrictions."
              }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="fi !h-auto">
                <details className="w-full group">
                  <summary className="fq marker:content-[''] list-none">
                    {faq.q}
                    <span className="fqi group-open:bg-p1 group-open:border-p1 group-open:rotate-45 transition-all"></span>
                  </summary>
                  <div className="fa-in mt-2 pb-5">
                    {faq.a}
                  </div>
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
            <h2>Ready to Create <em>Faster</em>?</h2>
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
