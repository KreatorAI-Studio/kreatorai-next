
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroDemo from "@/components/HeroDemo";

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-left">
          <div className="hbadge">
            🧪 Beta
          </div>
          <h1 className="sh">
            Your Complete<br />Social Media<br /><em>Command Center</em>
          </h1>
          <p className="hsub">
            Create content, publish it everywhere, and track what works — all from one place. KreatorAI handles AI video, images, captions, and voice, then schedules and publishes across Instagram, LinkedIn, X, YouTube and more, with analytics built in.
          </p>
          <div className="hbtns">
            <a
              href="https://app.kreatoraistudio.com"
              className="btn btn-p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free — No Card
            </a>
            <Link href="/services" className="btn btn-s">
              Explore Tools
            </Link>
          </div>
        </div>

        <HeroDemo />
      </div>

      {/* ── STATS ───────────────────────────────────── */}
      <ScrollReveal className="wrap pb-20 relative z-10">
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-num">20+</div>
            <div className="stat-label">AI-Powered Tools</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6+</div>
            <div className="stat-label">Platforms Supported</div>
          </div>
        </div>
      </ScrollReveal>

      <div className="divl"></div>

      {/* ── TOOLS PREVIEW ───────────────────────────── */}
      <section className="tools-sec relative z-10">
        <div className="wrap">
          <ScrollReveal className="tools-hd">
            <div className="kicker" style={{ justifyContent: "center" }}>
              What We Build For You
            </div>
            <h2 className="sh" style={{ textAlign: "center" }}>
              Create, Publish & Track — <em>All In One</em>
            </h2>
            <p className="sp mx-auto" style={{ textAlign: "center", maxWidth: "480px", marginTop: "12px" }}>
              The complete social media management platform for the modern creator workflow.
            </p>
          </ScrollReveal>
          
          <div className="tgrid mt-12 relative z-10">
            <ScrollReveal delay={0.07} className="tc">
              <span className="tc-icon">🎭</span>
              <div className="tc-name">Faceless Video & AI Avatars</div>
              <div className="tc-desc">
                Create your own AI avatar and have it present your content, or go fully faceless with automated video generation.
              </div>
              <span className="tc-badge badge-pro">Pro</span>
            </ScrollReveal>
            <ScrollReveal delay={0.14} className="tc">
              <span className="tc-icon">🎙️</span>
              <div className="tc-name">Advanced AI Voiceovers</div>
              <div className="tc-desc">
                Studio-quality voice-overs powered by ElevenLabs. Natural, expressive, and available in multiple voices and styles.
              </div>
              <span className="tc-badge badge-pro">Pro</span>
            </ScrollReveal>
            <ScrollReveal delay={0.21} className="tc">
              <span className="tc-icon">✂️</span>
              <div className="tc-name">Long Video → Shorts</div>
              <div className="tc-desc">
                Drop in a full-length video and get it auto-cut into short-form clips ready for Reels, Shorts, and TikTok.
              </div>
              <span className="tc-badge badge-pro">Pro</span>
            </ScrollReveal>
            <ScrollReveal delay={0.28} className="tc">
              <span className="tc-icon">📅</span>
              <div className="tc-name">Automated Publishing</div>
              <div className="tc-desc">
                Schedule and publish content to Instagram, LinkedIn, X, YouTube and more — all from a single calendar.
              </div>
              <span className="tc-badge badge-free">Free</span>
            </ScrollReveal>
            <ScrollReveal delay={0.35} className="tc">
              <span className="tc-icon">📊</span>
              <div className="tc-name">Cross-Platform Analytics</div>
              <div className="tc-desc">
                Track performance across every connected platform in one unified dashboard.
              </div>
              <span className="tc-badge badge-free">Free</span>
            </ScrollReveal>
            <ScrollReveal delay={0.42} className="tc">
              <span className="tc-icon">🗂️</span>
              <div className="tc-name">Multiple Workspaces</div>
              <div className="tc-desc">
                Manage several brands, clients, or creator accounts side by side, each with its own content and schedule.
              </div>
              <span className="tc-badge badge-free">Free</span>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.5} className="text-center mt-10">
            <Link href="/services" className="btn btn-s">
              See All 20+ Tools →
            </Link>
          </ScrollReveal>
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
                a: "Yes — our Free plan requires no credit card and gives you 25 AI credits per month, access to all text tools, and one free project. When you need more firepower, upgrade to Starter ($29/mo) for 250 credits, or Max ($89/mo) for 800."
              },
              {
                q: "Which platforms can I publish to?",
                a: "Instagram, LinkedIn, X, YouTube, and more — connect your accounts once and schedule or auto-publish content to all of them from a single calendar."
              },
              {
                q: "How do AI voiceovers and avatars work?",
                a: "Generate studio-quality voice-overs using ElevenLabs, or create a custom AI avatar and have it present your content for you — no camera required."
              },
              {
                q: "Can I use the content commercially?",
                a: "Absolutely. Everything generated by KreatorAI is yours — for social media, brand campaigns, client work, or any commercial purpose. No restrictions."
              },
              {
                q: "Is there a mobile app?",
                a: "KreatorAI is a Flutter-based app available on Android and iOS. The full web version works in any browser too. Everything syncs automatically across all your devices."
              },
              {
                q: "Can I manage multiple brands or clients?",
                a: "Yes. Create multiple workspaces to keep separate brands, clients, or creator accounts organised, each with their own content, schedule, and analytics."
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
