"use client";

import LegalLayout from "@/components/LegalLayout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "free-plan", label: "Free plan" },
  { id: "paid-plans", label: "Paid subscriptions" },
  { id: "cancel", label: "How to cancel" },
  { id: "exceptions", label: "Exceptions" },
  { id: "contact", label: "Contact" },
];

export default function RefundPage() {
  return (
    <LegalLayout
      kicker="Legal"
      title={<>Refund <em>Policy</em></>}
      intro="How billing, cancellations, and refunds work for KreatorAI subscriptions."
      effectiveDate="[Insert on publication]"
      lastUpdated="[Insert on publication]"
      toc={toc}
    >
      <div className="legal-note build-note">
        <b>Pre-launch draft.</b> Payment processing (Stripe) is not live yet — this policy reflects how billing will work once it is.
      </div>

      <section id="overview" className="legal-section">
        <h2><span className="n">01</span>Overview</h2>
        <p>KreatorAI offers a free plan and several paid subscription tiers, billed monthly or annually. Current pricing and credit allowances are shown on our <a href="/pricing">Pricing page</a>.</p>
      </section>

      <section id="free-plan" className="legal-section">
        <h2><span className="n">02</span>Free plan</h2>
        <p>The Free plan costs nothing and carries no billing, so no refund applies to it.</p>
      </section>

      <section id="paid-plans" className="legal-section">
        <h2><span className="n">03</span>Paid subscriptions</h2>
        <ul>
          <li>Subscriptions renew automatically each billing period until you cancel.</li>
          <li>Because credits are made available to your account immediately upon payment, <strong>payments are generally non-refundable</strong> once a billing period has started and credits have been granted.</li>
          <li>If you cancel, you keep access to your paid plan&rsquo;s features and remaining credits until the end of the current billing period — we don&rsquo;t refund the unused portion of that period.</li>
          <li>If you&rsquo;re charged in error (for example, a duplicate charge or a charge after you already cancelled), contact us and we&rsquo;ll investigate and refund confirmed billing errors in full.</li>
        </ul>
      </section>

      <section id="cancel" className="legal-section">
        <h2><span className="n">04</span>How to cancel</h2>
        <p>You can cancel your subscription at any time from Settings → Manage Subscription. Cancellation stops future renewals; it does not retroactively refund the current period.</p>
      </section>

      <section id="exceptions" className="legal-section">
        <h2><span className="n">05</span>Exceptions</h2>
        <p>We may issue a discretionary refund or credit if the Service was unavailable or materially defective for an extended period through our fault. We&rsquo;ll evaluate these requests case by case.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2><span className="n">06</span>Contact</h2>
        <p>Billing questions or refund requests: <a href="mailto:hello@kreatoraistudio.com">hello@kreatoraistudio.com</a>.</p>
      </section>
    </LegalLayout>
  );
}
