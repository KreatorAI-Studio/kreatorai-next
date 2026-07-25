"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPinterest,
  FaDropbox,
  FaGoogleDrive,
} from "react-icons/fa6";
import {
  TbBrandOpenai,
  TbBrandOnedrive,
  TbBrandNotion,
  TbBrandThreads,
  TbBrandBluesky,
  TbBrandZapier,
} from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";

// Authentic Canva Logo SVG
const CanvaLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="url(#canva-bg)" />
    <path
      d="M12.5 16.5C10.2 16.5 8.5 14.8 8.5 12.2C8.5 9.6 10.3 7.8 12.8 7.8C14.8 7.8 16.2 9.1 16.6 10.8L14.6 11.3C14.3 10.2 13.6 9.6 12.7 9.6C11.4 9.6 10.4 10.8 10.4 12.2C10.4 13.6 11.4 14.7 12.6 14.7C13.6 14.7 14.4 14 14.7 12.8L16.7 13.3C16.2 15.2 14.6 16.5 12.5 16.5Z"
      fill="white"
    />
    <defs>
      <linearGradient id="canva-bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4CC" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
  </svg>
);

interface FloatingBadge {
  id: string;
  name: string;
  icon: ReactNode;
  brandColor?: string;
  top: string;
  left: string;
  animationDelay: string;
  duration: string;
}

const FLOATING_BADGES: FloatingBadge[] = [
  // Top row
  { 
    id: "canva", 
    name: "Canva", 
    icon: <CanvaLogo />, 
    top: "12%", 
    left: "10%", 
    animationDelay: "0s", 
    duration: "6s" 
  },
  { 
    id: "x", 
    name: "X (Twitter)", 
    icon: <FaXTwitter className="w-5 h-5" />, 
    brandColor: "#000000", 
    top: "7%", 
    left: "26%", 
    animationDelay: "1.2s", 
    duration: "7s" 
  },
  { 
    id: "bluesky", 
    name: "Bluesky", 
    icon: <TbBrandBluesky className="w-5 h-5" />, 
    brandColor: "#1185FE", 
    top: "9%", 
    left: "72%", 
    animationDelay: "0.5s", 
    duration: "6.5s" 
  },
  { 
    id: "pinterest", 
    name: "Pinterest", 
    icon: <FaPinterest className="w-5 h-5" />, 
    brandColor: "#E60023", 
    top: "18%", 
    left: "86%", 
    animationDelay: "2s", 
    duration: "5.5s" 
  },
  
  // Upper middle
  { 
    id: "youtube", 
    name: "YouTube", 
    icon: <FaYoutube className="w-5 h-5" />, 
    brandColor: "#FF0000", 
    top: "24%", 
    left: "13%", 
    animationDelay: "1.8s", 
    duration: "6.2s" 
  },
  { 
    id: "notion", 
    name: "Notion", 
    icon: <TbBrandNotion className="w-5 h-5" />, 
    brandColor: "#000000", 
    top: "26%", 
    left: "76%", 
    animationDelay: "0.8s", 
    duration: "6.8s" 
  },
  { 
    id: "spark", 
    name: "AI Spark", 
    icon: <HiSparkles className="w-5 h-5" />, 
    brandColor: "#7C4DFF", 
    top: "39%", 
    left: "22%", 
    animationDelay: "2.4s", 
    duration: "5.8s" 
  },
  
  // Center sides
  { 
    id: "linkedin", 
    name: "LinkedIn", 
    icon: <FaLinkedin className="w-5 h-5" />, 
    brandColor: "#0A66C2", 
    top: "52%", 
    left: "12%", 
    animationDelay: "0.3s", 
    duration: "7.2s" 
  },
  { 
    id: "onedrive", 
    name: "OneDrive", 
    icon: <TbBrandOnedrive className="w-5 h-5" />, 
    brandColor: "#0078D4", 
    top: "60%", 
    left: "20%", 
    animationDelay: "1.5s", 
    duration: "6.4s" 
  },
  { 
    id: "threads", 
    name: "Threads", 
    icon: <TbBrandThreads className="w-5 h-5" />, 
    brandColor: "#000000", 
    top: "47%", 
    left: "75%", 
    animationDelay: "1.1s", 
    duration: "5.9s" 
  },
  { 
    id: "chatgpt", 
    name: "ChatGPT", 
    icon: <TbBrandOpenai className="w-5 h-5" />, 
    brandColor: "#10A37F", 
    top: "47%", 
    left: "88%", 
    animationDelay: "2.1s", 
    duration: "6.7s" 
  },
  { 
    id: "facebook", 
    name: "Facebook", 
    icon: <FaFacebook className="w-5 h-5" />, 
    brandColor: "#1877F2", 
    top: "64%", 
    left: "82%", 
    animationDelay: "0.9s", 
    duration: "6.1s" 
  },

  // Bottom row
  { 
    id: "gdrive", 
    name: "Google Drive", 
    icon: <FaGoogleDrive className="w-5 h-5" />, 
    brandColor: "#4285F4", 
    top: "78%", 
    left: "10%", 
    animationDelay: "1.6s", 
    duration: "6.6s" 
  },
  { 
    id: "instagram", 
    name: "Instagram", 
    icon: <FaInstagram className="w-5 h-5" />, 
    brandColor: "#E4405F", 
    top: "76%", 
    left: "25%", 
    animationDelay: "0.4s", 
    duration: "5.7s" 
  },
  { 
    id: "tiktok", 
    name: "TikTok", 
    icon: <FaTiktok className="w-5 h-5" />, 
    brandColor: "#000000", 
    top: "82%", 
    left: "41%", 
    animationDelay: "2.2s", 
    duration: "7.1s" 
  },
  { 
    id: "dropbox", 
    name: "Dropbox", 
    icon: <FaDropbox className="w-5 h-5" />, 
    brandColor: "#0061FF", 
    top: "82%", 
    left: "57%", 
    animationDelay: "1.3s", 
    duration: "6.3s" 
  },
  { 
    id: "zapier", 
    name: "Zapier", 
    icon: <TbBrandZapier className="w-5 h-5" />, 
    brandColor: "#FF4F00", 
    top: "81%", 
    left: "84%", 
    animationDelay: "0.7s", 
    duration: "5.6s" 
  }
];

export default function WorkspaceHero() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36 min-h-[85vh] flex items-center justify-center">
      {/* Background Grid Pattern - matching reference image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--hero-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--hero-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 30%, transparent 100%)"
        }}
      />

      {/* Radial ambient soft glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] pointer-events-none z-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124, 77, 255, 0.15), rgba(169, 125, 255, 0.03) 60%, transparent 80%)",
          filter: "blur(70px)"
        }}
      />

      {/* Floating Official Platform Logo Cards */}
      <div className="absolute inset-0 pointer-events-none z-10 max-w-[1300px] mx-auto overflow-hidden hidden sm:block">
        {FLOATING_BADGES.map((badge) => {
          return (
            <div
              key={badge.id}
              className="absolute transition-transform duration-300 hover:scale-125 pointer-events-auto cursor-pointer group"
              style={{
                top: badge.top,
                left: badge.left,
                animation: `floatBadge ${badge.duration} ease-in-out infinite alternate`,
                animationDelay: badge.animationDelay,
              }}
              title={badge.name}
            >
              <div 
                className="flex items-center justify-center p-3.5 rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "var(--badge-bg)",
                  border: "1px solid var(--badge-border)",
                  boxShadow: "0 10px 30px var(--badge-shadow)",
                  color: badge.brandColor || "inherit"
                }}
              >
                {badge.icon}
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimal Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        
        {/* Top Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 transition-colors"
          style={{
            background: "rgba(124, 77, 255, 0.12)",
            border: "1px solid var(--border-p)",
            color: "var(--p3)"
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          KreatorAI Workspace
        </div>

        {/* Headline */}
        <h1 
          className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 transition-colors"
          style={{ color: "var(--text)" }}
        >
          Your social media <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            workspace
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl max-w-2xl mx-auto font-medium mb-10 leading-relaxed transition-colors"
          style={{ color: "var(--text2)" }}
        >
          Connected to every platform and tool you use.
        </p>

        {/* Clean CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://app.kreatoraistudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg cursor-pointer"
            style={{
              background: "var(--grad)",
              color: "#ffffff",
              boxShadow: "0 10px 30px rgba(124,77,255,0.4)"
            }}
          >
            <span>Get Started For Free</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <Link
            href="/services"
            className="px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border-p)",
              color: "var(--text)"
            }}
          >
            Explore Tools
          </Link>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes floatBadge {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(6px) rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
}
