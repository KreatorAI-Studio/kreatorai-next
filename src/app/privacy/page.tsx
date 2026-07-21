"use client";

import LegalLayout from "@/components/LegalLayout";

const toc = [
  { id: "who", label: "Who we are" },
  { id: "collect", label: "Data we collect" },
  { id: "use", label: "How we use it" },
  { id: "share", label: "Who we share it with" },
  { id: "connected", label: "Connected accounts" },
  { id: "retention", label: "How long we keep it" },
  { id: "rights", label: "Your rights" },
  { id: "children", label: "Children's data" },
  { id: "security", label: "Security" },
  { id: "transfers", label: "International transfers" },
  { id: "cookies", label: "Cookies" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      kicker="Legal"
      title={<>Privacy <em>Policy</em></>}
      intro="How KreatorAI collects, uses, and protects your data — in plain language, covering every tool and every third party involved."
      effectiveDate="[Insert on publication]"
      lastUpdated="[Insert on publication]"
      toc={toc}
    >
      <div className="legal-note build-note">
        <b>Pre-launch draft.</b> This page accurately describes how the KreatorAI app and infrastructure handle data today. It is accurate and complete enough to serve as the live privacy policy referenced by LinkedIn, Reddit, and other developer app registrations.
      </div>

      <section id="who" className="legal-section">
        <h2><span className="n">01</span>Who we are</h2>
        <p>
          KreatorAI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is an AI-powered content creation platform — a mobile, web, and desktop app that helps creators generate scripts, images, video, avatars, motion graphics, captions, and other content, and optionally publish it to connected social accounts.
        </p>
        <p>
          For any privacy question, reach us at{" "}
          <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a>.
        </p>
      </section>

      <section id="collect" className="legal-section">
        <h2><span className="n">02</span>Data we collect</h2>

        <h3>Account information</h3>
        <ul>
          <li>Email address and password (if you sign up directly), handled via Firebase Authentication.</li>
          <li>Name, email, and profile photo if you sign in with Google.</li>
          <li>Account status: subscription plan, credit balance, and usage history.</li>
        </ul>

        <h3>Content you provide</h3>
        <ul>
          <li>Text prompts, scripts, and inputs you type into any generation tool.</li>
          <li>Photos and videos you upload — for example, for Avatar Studio (used to train a custom AI avatar), Remove Background, Image-to-Image, or Caption Generator.</li>
          <li>Brand Kit details: your brand color, logo, niche, tone, and target audience, if you set these up.</li>
        </ul>

        <h3>Generated content</h3>
        <p>Images, video, audio, scripts, and other content our AI tools generate for you, stored so you can access your generation history.</p>

        <h3>Usage and device data</h3>
        <ul>
          <li>Generation history: what tools you used and when.</li>
          <li>Session data: device type, approximate platform (web, iOS, Android, desktop), and active login sessions — so you can view and revoke sessions from Settings.</li>
          <li>Basic diagnostic and crash data needed to keep the app working.</li>
        </ul>

        <h3>Payment information</h3>
        <p>
          If you subscribe to a paid plan, payment is processed by Stripe. We do not store your full card details — Stripe handles that directly and shares only what&rsquo;s needed to manage your subscription (plan, status, renewal date).
        </p>
      </section>

      <section id="use" className="legal-section">
        <h2><span className="n">03</span>How we use it</h2>
        <ul>
          <li>To create and secure your account, and authenticate you when you log in.</li>
          <li>To run the AI generation tools you use — your prompts and uploads are sent to the relevant AI provider solely to produce your requested output.</li>
          <li>To store your generation history and Brand Kit so you don&rsquo;t have to re-enter information each time.</li>
          <li>To manage your subscription, credits, and billing.</li>
          <li>To publish content to social platforms on your behalf, only when you explicitly connect an account and choose to publish or schedule a post.</li>
          <li>To provide customer support and respond to your requests.</li>
          <li>To maintain security, for example detecting suspicious login activity.</li>
        </ul>
        <p>We do not sell your personal data. We do not use your uploaded photos, videos, or prompts to train our own AI models.</p>
      </section>

      <section id="share" className="legal-section">
        <h2><span className="n">04</span>Who we share it with</h2>
        <p>We share data only with the service providers needed to run the app, and only the minimum needed for each to do its job. We do not sell data to advertisers or data brokers.</p>

        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr><th>Provider</th><th>What they receive</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td className="tn">Firebase (Google)</td><td>Email, auth credentials, basic analytics</td><td>Account login &amp; authentication</td></tr>
              <tr><td className="tn">Supabase</td><td>App database records, uploaded files</td><td>Data storage, file storage</td></tr>
              <tr><td className="tn">Google Gemini API</td><td>Text prompts, uploaded images/video for the specific generation requested</td><td>Content generation, transcription</td></tr>
              <tr><td className="tn">Stability AI</td><td>Images and prompts submitted to image tools</td><td>Image generation &amp; editing</td></tr>
              <tr><td className="tn">ElevenLabs</td><td>Text submitted to voice tools</td><td>Text-to-speech generation</td></tr>
              <tr><td className="tn">HeyGen</td><td>Photos/video uploaded for avatar creation, and scripts for avatar videos</td><td>AI avatar training &amp; video generation</td></tr>
              <tr><td className="tn">Freesound</td><td>Search queries for background music</td><td>Royalty-free music sourcing</td></tr>
              <tr><td className="tn">Render</td><td>All backend request data (infrastructure host)</td><td>Application hosting</td></tr>
              <tr><td className="tn">LinkedIn / Reddit</td><td>Only if you connect an account: your post content and OAuth token</td><td>Publishing content you choose to post, on your behalf</td></tr>
              <tr><td className="tn">Stripe</td><td>Billing details, plan status</td><td>Subscription billing</td></tr>
            </tbody>
          </table>
        </div>

        <p>Each provider processes data under its own privacy policy and terms; we choose providers that meet reasonable security standards. We may also disclose data if required by law, or to protect the rights, safety, or property of KreatorAI or our users.</p>
      </section>

      <section id="connected" className="legal-section">
        <h2><span className="n">05</span>Connected accounts</h2>
        <p>KreatorAI lets you optionally connect third-party social accounts — currently LinkedIn and Reddit — to publish or schedule content directly from the app.</p>
        <ul>
          <li>Connecting an account is always your choice — nothing is connected automatically.</li>
          <li>We request the minimum access needed: reading your basic profile and posting on your behalf. We do not request access to private messages, contacts, or browsing activity on these platforms.</li>
          <li>We store an access token (and, where applicable, a refresh token) so we can post when you ask us to — never your password. You can disconnect an account at any time from Settings, and you can also revoke access directly from the platform&rsquo;s own account settings.</li>
          <li>We only publish content when you explicitly hit &ldquo;Publish&rdquo; or &ldquo;Schedule.&rdquo; We do not post on your behalf without your direct action.</li>
        </ul>
      </section>

      <section id="retention" className="legal-section">
        <h2><span className="n">06</span>How long we keep it</h2>
        <p>
          We keep your account data and generation history for as long as your account is active. If you delete your account, we delete your personal data and uploaded content within 90 days, except where required to retain records for legal, tax, or security purposes — for example, billing records or logs of data-rights requests, which we retain for at least 3 years as required under Indian data protection rules.
        </p>
      </section>

      <section id="rights" className="legal-section">
        <h2><span className="n">07</span>Your rights</h2>
        <p>Under India&rsquo;s Digital Personal Data Protection Act and similar laws in other regions, you have the right to:</p>
        <div className="legal-rights-grid">
          <div className="legal-right-card"><div className="t">Access</div><div className="d">Request a copy of the personal data we hold about you.</div></div>
          <div className="legal-right-card"><div className="t">Correct</div><div className="d">Ask us to fix inaccurate or incomplete data.</div></div>
          <div className="legal-right-card"><div className="t">Erase</div><div className="d">Ask us to delete your account and associated data.</div></div>
          <div className="legal-right-card"><div className="t">Withdraw consent</div><div className="d">Withdraw consent for any processing that relies on it, at any time.</div></div>
          <div className="legal-right-card"><div className="t">Nominate</div><div className="d">Name someone to exercise these rights on your behalf in case of death or incapacity.</div></div>
        </div>
        <p>To exercise any of these, email <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a>. We&rsquo;ll verify your identity and respond within a reasonable time.</p>
      </section>

      <section id="children" className="legal-section">
        <h2><span className="n">08</span>Children&rsquo;s data</h2>
        <p>KreatorAI is intended for users aged 13 and over. We do not knowingly collect personal data from anyone under 13 without verifiable parental or guardian consent. If you believe a child has provided us with personal data without such consent, contact us and we will delete it.</p>
        <div className="legal-note">
          <b>Build note:</b> age-gating and a parental-consent flow are in development and not yet live in the app as of this draft. This will be completed before public launch to make this section accurate in practice, not just in policy.
        </div>
      </section>

      <section id="security" className="legal-section">
        <h2><span className="n">09</span>Security</h2>
        <p>We use industry-standard measures to protect your data, including encrypted connections (HTTPS/TLS) for all traffic, authenticated API access, and access-token-based — not password-based — connections to third-party platforms. No system is 100% secure, and we can&rsquo;t guarantee absolute security, but we work to minimize risk and will notify affected users and relevant authorities in the event of a breach, as required by law.</p>
      </section>

      <section id="transfers" className="legal-section">
        <h2><span className="n">10</span>International data transfers</h2>
        <p>Some of our service providers process data outside India, including in the United States. Where data is transferred internationally, we rely on each provider&rsquo;s own compliance safeguards and choose providers with reasonable security and privacy commitments.</p>
      </section>

      <section id="cookies" className="legal-section">
        <h2><span className="n">11</span>Cookies</h2>
        <p>Our website and web app use cookies and similar local storage. See our <a href="/cookies">Cookie Policy</a> for full details and to manage your preferences at any time.</p>
      </section>

      <section id="changes" className="legal-section">
        <h2><span className="n">12</span>Changes to this policy</h2>
        <p>We may update this policy as the app evolves. We&rsquo;ll update the &ldquo;Last updated&rdquo; date above, and for material changes, we&rsquo;ll notify you in-app or by email before the changes take effect.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2><span className="n">13</span>Contact</h2>
        <p>For privacy questions, data-rights requests, or complaints:</p>
        <ul>
          <li>Email: <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a></li>
        </ul>
      </section>
    </LegalLayout>
  );
}
