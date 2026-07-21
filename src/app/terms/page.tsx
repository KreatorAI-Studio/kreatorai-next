"use client";

import LegalLayout from "@/components/LegalLayout";

const toc = [
  { id: "accept", label: "Acceptance of terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "account", label: "Your account" },
  { id: "credits", label: "Credits & subscriptions" },
  { id: "content", label: "Your content & AI outputs" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "connected", label: "Connected social accounts" },
  { id: "ip", label: "Our intellectual property" },
  { id: "third-party", label: "Third-party AI providers" },
  { id: "termination", label: "Suspension & termination" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      kicker="Legal"
      title={<>Terms of <em>Service</em></>}
      intro="The rules for using KreatorAI — written to actually reflect how the product works, not boilerplate."
      effectiveDate="[Insert on publication]"
      lastUpdated="[Insert on publication]"
      toc={toc}
    >
      <div className="legal-note build-note">
        <b>Pre-launch draft.</b> Accurate to how the app currently works.
      </div>

      <section id="accept" className="legal-section">
        <h2><span className="n">01</span>Acceptance of terms</h2>
        <p>
          By creating an account or using KreatorAI (the &ldquo;Service&rdquo;), you agree to these Terms of Service. If you don&rsquo;t agree, please don&rsquo;t use the Service. These Terms form a legal agreement between you and KreatorAI (&ldquo;we,&rdquo; &ldquo;us&rdquo;).
        </p>
      </section>

      <section id="eligibility" className="legal-section">
        <h2><span className="n">02</span>Eligibility</h2>
        <p>You must be 13 or older to create an account and use KreatorAI. If we later introduce access for younger users, it will require verifiable parental or guardian consent, as described in our <a href="/privacy">Privacy Policy</a>.</p>
      </section>

      <section id="account" className="legal-section">
        <h2><span className="n">03</span>Your account</h2>
        <ul>
          <li>You&rsquo;re responsible for keeping your login credentials secure and for all activity under your account.</li>
          <li>You can view and revoke active sessions at any time from Settings.</li>
          <li>Tell us right away if you suspect unauthorized access to your account.</li>
          <li>You can delete your account at any time from Settings; see our Privacy Policy for what happens to your data afterward.</li>
        </ul>
      </section>

      <section id="credits" className="legal-section">
        <h2><span className="n">04</span>Credits &amp; subscriptions</h2>
        <p>
          KreatorAI uses a credit system: each AI generation (script, image, video, avatar, voice, etc.) costs a set number of credits, and your plan grants a monthly credit allowance. Current plans, pricing, and credit allowances are shown on our <a href="/pricing">Pricing page</a> and may change from time to time — we&rsquo;ll give notice of price changes before they apply to an existing subscription.
        </p>
        <ul>
          <li>Unused credits do not roll over between billing periods unless stated otherwise on the Pricing page.</li>
          <li>Subscriptions renew automatically at the end of each billing period until cancelled. You can cancel any time from Settings; cancellation takes effect at the end of the current billing period.</li>
          <li>See our <a href="/refund">Refund Policy</a> for how refunds and cancellations are handled.</li>
        </ul>
      </section>

      <section id="content" className="legal-section">
        <h2><span className="n">05</span>Your content &amp; AI outputs</h2>
        <ul>
          <li><strong>What you upload:</strong> you keep ownership of any text, photos, or video you upload. You grant us a limited license to process it solely to provide the Service — for example, sending your photo to our avatar-training provider when you ask us to create an avatar.</li>
          <li><strong>What the AI generates:</strong> subject to these Terms and to the terms of the underlying AI providers (Section 09), you own the content generated for you through KreatorAI and may use it commercially.</li>
          <li><strong>Your responsibility:</strong> you&rsquo;re responsible for how you use generated content, including ensuring it doesn&rsquo;t infringe others&rsquo; rights or violate any law, and for any content you choose to publish through connected accounts (Section 07).</li>
          <li>We don&rsquo;t claim ownership of your uploads or your generated outputs.</li>
        </ul>
      </section>

      <section id="acceptable-use" className="legal-section">
        <h2><span className="n">06</span>Acceptable use</h2>
        <p>You agree not to use KreatorAI to:</p>
        <ul>
          <li>Generate or publish illegal content, hate speech, harassment, or content that infringes someone else&rsquo;s intellectual property.</li>
          <li>Create deepfakes or avatars of real people without their consent.</li>
          <li>Attempt to reverse-engineer, scrape, or overload the Service or its underlying AI providers.</li>
          <li>Use the Service to spam or bulk-post to social platforms in violation of those platforms&rsquo; own terms.</li>
          <li>Circumvent credit limits, rate limits, or subscription tiers.</li>
        </ul>
        <p>We may suspend or terminate accounts that violate this section (see Section 10).</p>
      </section>

      <section id="connected" className="legal-section">
        <h2><span className="n">07</span>Connected social accounts</h2>
        <p>
          If you connect LinkedIn, Reddit, or other social accounts, you authorize us to publish content to those accounts only when you explicitly choose to publish or schedule a post. You remain solely responsible for anything posted through your connected accounts, and for complying with each platform&rsquo;s own terms of service and community guidelines. You can disconnect an account at any time from Settings.
        </p>
      </section>

      <section id="ip" className="legal-section">
        <h2><span className="n">08</span>Our intellectual property</h2>
        <p>The KreatorAI name, logo, app, and underlying software are our property (or licensed to us) and are protected by intellectual property law. These Terms don&rsquo;t grant you any right to use our branding except as needed to use the Service normally.</p>
      </section>

      <section id="third-party" className="legal-section">
        <h2><span className="n">09</span>Third-party AI providers</h2>
        <p>
          KreatorAI relies on third-party AI providers (Google Gemini, Stability AI, ElevenLabs, HeyGen, and others listed in our <a href="/privacy">Privacy Policy</a>) to generate content. Your use of generated outputs is also subject to each provider&rsquo;s applicable usage policies. If a provider changes availability, pricing, or terms, some features may change or become temporarily unavailable — we&rsquo;ll do our best to notify you of material impacts.
        </p>
      </section>

      <section id="termination" className="legal-section">
        <h2><span className="n">10</span>Suspension &amp; termination</h2>
        <p>We may suspend or terminate your account if you violate these Terms, misuse the Service, or if required by law. You may stop using the Service and delete your account at any time. Sections that by their nature should survive termination (like intellectual property and limitation of liability) will continue to apply.</p>
      </section>

      <section id="disclaimers" className="legal-section">
        <h2><span className="n">11</span>Disclaimers</h2>
        <p>
          The Service is provided &ldquo;as is&rdquo; without warranties of any kind. AI-generated content may be inaccurate, unexpected, or unsuitable for your purposes — review generated content before publishing or relying on it. We don&rsquo;t guarantee uninterrupted or error-free operation of the Service or any third-party provider it depends on.
        </p>
      </section>

      <section id="liability" className="legal-section">
        <h2><span className="n">12</span>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, KreatorAI and its operator won&rsquo;t be liable for indirect, incidental, or consequential damages arising from your use of the Service. Our total liability for any claim relating to the Service is limited to the amount you paid us in the 3 months before the claim arose.
        </p>
      </section>

      <section id="changes" className="legal-section">
        <h2><span className="n">13</span>Changes to these terms</h2>
        <p>We may update these Terms as the Service evolves. We&rsquo;ll update the &ldquo;Last updated&rdquo; date above, and for material changes, we&rsquo;ll notify you in-app or by email before they take effect. Continuing to use the Service after changes take effect means you accept the updated Terms.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2><span className="n">14</span>Contact</h2>
        <p>Questions about these Terms? Email <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a>.</p>
      </section>
    </LegalLayout>
  );
}
