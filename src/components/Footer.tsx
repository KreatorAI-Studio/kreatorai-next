"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="fgrid">
        <div className="fbrand">
          <Link href="/" className="nl">
            <img
              src="/assets/images/logo.png"
              alt="KreatorAI"
              style={{ height: "32px", width: "32px", borderRadius: "8px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/images/Icon-192.png";
              }}
            />
            <span className="nl-n">KreatorAI</span>
          </Link>
          <p>
            The all-in-one social media management platform — create, publish, and track content across Instagram, LinkedIn, X, YouTube and more.
          </p>
        </div>
        <div className="fcol">
          <h4>Product</h4>
          <ul>
            <li>
              <Link href="/services">All Tools</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <a href="https://app.kreatoraistudio.com" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/about">Meet the Founder</Link>
            </li>
            <li>
              <a href="mailto:hello@kreatoraistudio.com">Contact</a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/refund">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="fb-bot">
        <div className="fcopy">© 2026 KreatorAI · Built for CREATORS by KREATORS</div>
        <div className="fsoc">
          <a
            href="https://instagram.com/neilsurjiani28"
            className="fsl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>
          <a
            href="https://twitter.com/kreatoraistudio"
            className="fsl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            𝕏
          </a>
          <a
            href="https://github.com/neil-surjiani"
            className="fsl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/neil-surjiani"
            className="fsl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </footer>
  );
}
