"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <nav id="nav" className={`${scrolled ? "sc" : ""} transition-all duration-400`}>
        <Link href="/" className="nl">
          <img
            src="/assets/images/logo.png"
            alt="KreatorAI"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/images/Icon-192.png";
            }}
          />
          <span className="nl-n">KreatorAI</span>
          <span className="dev-badge" style={{ background: "rgba(124,77,255,.12)", border: "1px solid rgba(124,77,255,.3)", color: "var(--p3)" }}>🧪 Beta</span>
        </Link>

        <ul className="nm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://app.kreatoraistudio.com"
            className="ncta"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#22c55e", boxShadow: "0 0 8px #22c55e",
              display: "inline-block"
            }} />
            Launch App →
          </a>
          <button
            className={`hbg ${mobileOpen ? "open" : ""}`}
            id="hbg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobmenu" className={mobileOpen ? "open" : ""}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={pathname === link.href ? "text-p3" : ""}
          >
            {link.name}
          </Link>
        ))}
        <a
          href="https://app.kreatoraistudio.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--p2)" }}
        >
          Launch App →
        </a>
      </div>
    </>
  );
}
