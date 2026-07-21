"use client";

import LegalLayout from "@/components/LegalLayout";

const toc = [
  { id: "what", label: "What cookies are" },
  { id: "types", label: "Cookies we use" },
  { id: "manage", label: "Managing your preferences" },
  { id: "third-party", label: "Third-party cookies" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      kicker="Legal"
      title={<>Cookie <em>Policy</em></>}
      intro="What cookies and local storage KreatorAI actually uses, and how to control them."
      effectiveDate="[Insert on publication]"
      lastUpdated="[Insert on publication]"
      toc={toc}
    >
      <section id="what" className="legal-section">
        <h2><span className="n">01</span>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device by your browser. We also use similar local-storage technologies (like <code>localStorage</code>) for the same purposes. This policy covers both.
        </p>
      </section>

      <section id="types" className="legal-section">
        <h2><span className="n">02</span>Cookies we use</h2>

        <h3>Essential (always on)</h3>
        <p>Required for the site and app to function — keeping you logged in, remembering your cookie preferences, and basic security. These can&rsquo;t be switched off, since the Service won&rsquo;t work correctly without them.</p>

        <h3>Functional</h3>
        <p>Remember your preferences — for example, your Brand Kit selections or UI settings — so you don&rsquo;t have to re-enter them every visit.</p>

        <h3>Analytics</h3>
        <p>Help us understand how the site and app are used (via Firebase Analytics) so we can improve them. These are only set if you accept them below.</p>

        <p>We do not currently use third-party advertising or cross-site tracking cookies. If that changes, we&rsquo;ll update this page and ask for your consent before any new category is activated.</p>
      </section>

      <section id="manage" className="legal-section">
        <h2><span className="n">03</span>Managing your preferences</h2>
        <p>
          You can accept, reject, or customize non-essential cookies at any time. When you first visit, you&rsquo;ll see a banner with Accept, Reject, and Manage options. To change your choice later, use the button below.
        </p>
        <button
          id="cc-reopen-btn"
          className="btn btn-s"
          style={{ marginTop: 8 }}
        >
          Manage Cookie Preferences
        </button>
      </section>

      <section id="third-party" className="legal-section">
        <h2><span className="n">04</span>Third-party cookies</h2>
        <p>Some functional/analytics cookies are set by third parties we use to run the site and app — primarily Firebase (Google). These providers may also set their own cookies subject to their own privacy policies. See our <a href="/privacy">Privacy Policy</a> for the full list of providers we work with.</p>
      </section>

      <section id="changes" className="legal-section">
        <h2><span className="n">05</span>Changes to this policy</h2>
        <p>We may update this policy as our use of cookies changes. We&rsquo;ll update the &ldquo;Last updated&rdquo; date above and, for material changes, prompt you to review your preferences again.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2><span className="n">06</span>Contact</h2>
        <p>Questions about cookies? Email <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a>.</p>
      </section>
    </LegalLayout>
  );
}
