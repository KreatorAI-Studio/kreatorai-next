"use client";

import { useState, FormEvent, ReactNode } from "react";
import Link from "next/link";

// High quality SVG Brand Logos matching the user's requested reference image
const SocialLogos = {
  YouTube: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M17.5 10.2C17.4 9.5 16.8 8.9 16.1 8.8C14.8 8.5 12 8.5 12 8.5C12 8.5 9.2 8.5 7.9 8.8C7.2 8.9 6.6 9.5 6.5 10.2C6.2 11.5 6.2 12.5 6.2 12.5C6.2 12.5 6.2 13.5 6.5 14.8C6.6 15.5 7.2 16.1 7.9 16.2C9.2 16.5 12 16.5 12 16.5C12 16.5 14.8 16.5 16.1 16.2C16.8 16.1 17.4 15.5 17.5 14.8C17.8 13.5 17.8 12.5 17.8 12.5C17.8 12.5 17.8 11.5 17.5 10.2Z" fill="#FF0000" />
      <path d="M10.8 14.2V10.8L14.2 12.5L10.8 14.2Z" fill="white" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path d="M7.4 9.2H9.8V16.8H7.4V9.2ZM8.6 6.2C7.8 6.2 7.2 6.8 7.2 7.6C7.2 8.3 7.8 8.9 8.6 8.9C9.4 8.9 10 8.3 10 7.6C10 6.8 9.4 6.2 8.6 6.2ZM11.4 9.2H13.7V10.2H13.7C14 9.6 14.8 9 16 9C18.4 9 18.9 10.6 18.9 12.7V16.8H16.5V13.1C16.5 12.2 16.5 11.1 15.2 11.1C14 11.1 13.8 12.1 13.8 13V16.8H11.4V9.2Z" fill="white" />
    </svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path d="M15.4 6.5H17.3L13.1 11.3L18 17.8H14.2L11.2 13.9L7.8 17.8H5.9L10.4 12.6L5.7 6.5H9.6L12.3 10.1L15.4 6.5ZM14.7 16.6H15.8L9.1 7.6H8L14.7 16.6Z" fill="white" />
    </svg>
  ),
  Instagram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2.8" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="15.4" cy="8.6" r="0.9" fill="white" />
    </svg>
  ),
  TikTok: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path d="M15.2 6.5C14.6 6.5 14.1 6.3 13.6 6C13.2 5.7 12.9 5.3 12.7 4.8H10.4V14.6C10.4 15.3 10.1 16 9.6 16.5C9.1 17 8.4 17.3 7.7 17.3C6.3 17.3 5.2 16.1 5.2 14.8C5.2 13.4 6.3 12.3 7.7 12.3C8 12.3 8.3 12.4 8.6 12.5V10.1C8.3 10 8 9.9 7.7 9.9C5 9.9 2.8 12.1 2.8 14.8C2.8 17.5 5 19.7 7.7 19.7C10.4 19.7 12.6 17.5 12.6 14.8V9.4C13.6 10.1 14.8 10.5 16 10.5V8.1C15.2 8.1 14.4 7.6 13.9 6.9C14.3 6.6 14.7 6.5 15.2 6.5Z" fill="white" />
      <path d="M15.2 6.5C14.6 6.5 14.1 6.3 13.6 6V8.4C14.1 8.7 14.6 8.9 15.2 8.9V6.5Z" fill="#25F4EE" />
      <path d="M12.7 4.8C12.9 5.3 13.2 5.7 13.6 6C14.1 6.3 14.6 6.5 15.2 6.5V8.9C14.6 8.9 14.1 8.7 13.6 8.4V14.8C13.6 17.5 11.4 19.7 8.7 19.7V17.3C10.1 17.3 11.2 16.1 11.2 14.8V4.8H12.7Z" fill="#FE2C55" />
    </svg>
  ),
  Threads: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#101010" />
      <path d="M14.5 11.2C14.4 11.1 14.1 11 13.7 11C12.7 11 12 11.8 12 12.8C12 13.8 12.7 14.6 13.7 14.6C14.3 14.6 14.7 14.3 14.9 13.9H16.4C16.1 15.2 15.1 16.1 13.7 16.1C11.8 16.1 10.4 14.6 10.4 12.8C10.4 11 11.8 9.5 13.7 9.5C15 9.5 16 10.2 16.4 11.3L14.5 11.2Z" fill="white" />
      <path d="M12 5.5C8.4 5.5 5.5 8.4 5.5 12C5.5 15.6 8.4 18.5 12 18.5C14.3 18.5 16.3 17.3 17.4 15.5L16 14.6C15.2 16 13.7 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7C14.5 7 16.5 8.8 16.9 11.2H18.4C18 8 15.3 5.5 12 5.5Z" fill="white" />
    </svg>
  ),
  Facebook: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path d="M15.5 12.5H13.2V19.5H10.3V12.5H8.9V10H10.3V8.4C10.3 7 11.1 5.5 13.5 5.5H15.6V8H14.1C13.4 8 13.2 8.3 13.2 8.8V10H15.8L15.5 12.5Z" fill="white" />
    </svg>
  ),
  Pinterest: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#BD081C" />
      <path d="M12 5.5C8.4 5.5 5.5 8.4 5.5 12C5.5 14.7 7.2 17.1 9.6 18C9.5 17.2 9.5 15.9 9.7 15.1L10.5 11.7C10.5 11.7 10.3 11.2 10.3 10.5C10.3 9.4 11 8.5 11.8 8.5C12.5 8.5 12.8 9 12.8 9.6C12.8 10.3 12.3 11.4 12.1 12.4C11.9 13.2 12.5 13.9 13.3 13.9C14.8 13.9 15.9 12.3 15.9 10.1C15.9 8.1 14.5 6.7 12.2 6.7C9.6 6.7 8 8.6 8 10.7C8 11.5 8.3 12.3 8.7 12.8C8.8 12.9 8.8 13 8.8 13.1L8.5 14.3C8.5 14.5 8.3 14.5 8.2 14.5C7.2 14 6.6 12.6 6.6 10.7C6.6 7.7 9 5.5 12.3 5.5C15 5.5 17 7.4 17 10.1C17 13.4 15.3 15.7 13.3 15.7C12.6 15.7 12 15.3 12.2 14.5L12.7 12.4C12.9 11.6 12.9 11.2 12.5 11.2C12.1 11.2 11.3 11.7 10.9 12.5L10.8 13C10.5 14.3 9.9 16.7 9.7 17.7C9.6 18.2 9.6 18.7 9.6 19.1C10.4 19.3 11.2 19.5 12 19.5C16.1 19.5 19.5 16.1 19.5 12C19.5 7.9 16.1 5.5 12 5.5Z" fill="white" />
    </svg>
  ),
  Bluesky: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1185FE" />
      <path d="M12 10.8C10.8 8.6 8.2 6 5.8 6C3.8 6 3 7.8 3 9.4C3 13.2 6.7 14.9 10.2 17.5C10.8 18 11.4 18.5 12 19C12.6 18.5 13.2 18 13.8 17.5C17.3 14.9 21 13.2 21 9.4C21 7.8 20.2 6 18.2 6C15.8 6 13.2 8.6 12 10.8Z" fill="white" />
    </svg>
  ),
  ChatGPT: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#10A37F" />
      <path d="M18 10.2C17.7 7.8 15.6 6 13.2 6C12.5 6 11.8 6.2 11.2 6.5C10.6 5.6 9.5 5 8.4 5C6.3 5 4.5 6.6 4.2 8.7C3.5 9.3 3 10.2 3 11.3C3 12.8 3.9 14 5.2 14.6C5.4 16.2 6.7 17.4 8.3 17.6C8.8 18.5 9.8 19 10.9 19C13 19 14.8 17.5 15.2 15.4C16.1 14.8 16.7 13.8 16.7 12.7C16.7 11.7 16.2 10.8 15.4 10.3C15.5 10.2 15.5 10.2 18 10.2ZM10.9 17.6C10.2 17.6 9.6 17.3 9.2 16.8L11.5 15.5V13.8L8.6 15.5C7.6 15.3 6.8 14.5 6.7 13.5L8.9 12.2V9.6L6.6 10.9C6.4 10.1 6.7 9.2 7.4 8.7L9.7 10V12.6L12 11.3L14.3 12.6L12 13.9V16.5L14.3 15.2C13.8 16.7 12.4 17.6 10.9 17.6Z" fill="white" />
    </svg>
  ),
  Zapier: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FF4F00" />
      <path d="M12.8 5L6.5 13H11.5L10.2 19L17.5 11H12.5L12.8 5Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
    </svg>
  ),
  Dropbox: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0061FF" />
      <path d="M7.5 6.5L12 9.4L16.5 6.5L12 3.6L7.5 6.5ZM12 9.4L7.5 12.3L12 15.2L16.5 12.3L12 9.4ZM3 9.4L7.5 12.3L12 9.4L7.5 6.5L3 9.4ZM16.5 6.5L12 9.4L16.5 12.3L21 9.4L16.5 6.5ZM7.5 13.5L12 16.4L16.5 13.5L12 10.6L7.5 13.5ZM12 17.2L7.5 14.3L6.4 15L12 18.6L17.6 15L16.5 14.3L12 17.2Z" fill="white" />
    </svg>
  ),
  GoogleDrive: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFFFFF" />
      <path d="M8.2 16.5L4.5 10.2L8.2 3.8H15.8L19.5 10.2L15.8 16.5H8.2Z" fill="none" />
      <path d="M15.2 16.2H8.8L5.5 10.5L8.8 4.8H15.2L18.5 10.5L15.2 16.2Z" fill="none" />
      <path d="M9.2 16.2L5 9H11.5L15.7 16.2H9.2Z" fill="#34A853" />
      <path d="M15.7 16.2L19.8 9L15.7 1.8H7.3L11.5 9L15.7 16.2Z" fill="#4285F4" />
      <path d="M7.3 1.8L3.2 9L7.3 16.2L11.5 9L7.3 1.8Z" fill="#FBBC04" />
    </svg>
  ),
  Canva: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#00C4CC" />
      <path d="M12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7C14.2 7 16.1 8.4 16.8 10.4L14.7 11.1C14.3 9.8 13.2 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.2 15 14.3 14.2 14.7 12.9L16.8 13.6C16.1 15.6 14.2 17 12 17Z" fill="white" />
    </svg>
  ),
  OneDrive: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0078D4" />
      <path d="M14.2 10.5C13.6 9 12.1 8 10.4 8C8.3 8 6.5 9.5 6.1 11.6C4.9 11.9 4 13 4 14.3C4 15.8 5.2 17 6.7 17H16.3C17.8 17 19 15.8 19 14.3C19 12.9 17.9 11.7 16.5 11.6C16.1 10.1 14.7 9 13 9" fill="none" />
      <path d="M15.8 11.5C15.2 10.1 13.8 9.2 12.3 9.2C10.7 9.2 9.3 10.1 8.7 11.5C7.7 11.8 7 12.7 7 13.8C7 15 8 16 9.2 16H16.8C18 16 19 15 19 13.8C19 12.7 18.3 11.8 17.3 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  ),
  Notion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <path d="M6.5 6.5L16.2 5.5L17.5 7V17.5L7.8 18.5L6.5 17V6.5Z" fill="#F3F4F6" stroke="#000000" strokeWidth="1" />
      <path d="M9 9.2L12.5 14.5V9.5H14.5V15.5L11 10.2V15H9V9.2Z" fill="#000000" />
    </svg>
  ),
  Spark: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#7C4DFF" />
      <path d="M12 4L13.8 9.2L19 11L13.8 12.8L12 18L10.2 12.8L5 11L10.2 9.2L12 4Z" fill="white" />
    </svg>
  )
};

interface FloatingBadge {
  id: string;
  name: string;
  Logo: () => ReactNode;
  top: string;
  left: string;
  animationDelay: string;
  duration: string;
  scale?: number;
}

const FLOATING_BADGES: FloatingBadge[] = [
  // Top row
  { id: "canva", name: "Canva", Logo: SocialLogos.Canva, top: "10%", left: "11%", animationDelay: "0s", duration: "6s" },
  { id: "x", name: "X", Logo: SocialLogos.X, top: "6%", left: "26%", animationDelay: "1.2s", duration: "7s" },
  { id: "bluesky", name: "Bluesky", Logo: SocialLogos.Bluesky, top: "8%", left: "73%", animationDelay: "0.5s", duration: "6.5s" },
  { id: "pinterest", name: "Pinterest", Logo: SocialLogos.Pinterest, top: "18%", left: "86%", animationDelay: "2s", duration: "5.5s" },
  
  // Upper middle
  { id: "youtube", name: "YouTube", Logo: SocialLogos.YouTube, top: "22%", left: "12%", animationDelay: "1.8s", duration: "6.2s" },
  { id: "notion", name: "Notion", Logo: SocialLogos.Notion, top: "25%", left: "75%", animationDelay: "0.8s", duration: "6.8s" },
  { id: "spark", name: "AI Spark", Logo: SocialLogos.Spark, top: "35%", left: "24%", animationDelay: "2.4s", duration: "5.8s" },
  
  // Center sides
  { id: "linkedin", name: "LinkedIn", Logo: SocialLogos.LinkedIn, top: "44%", left: "15%", animationDelay: "0.3s", duration: "7.2s" },
  { id: "onedrive", name: "OneDrive", Logo: SocialLogos.OneDrive, top: "52%", left: "21%", animationDelay: "1.5s", duration: "6.4s" },
  { id: "threads", name: "Threads", Logo: SocialLogos.Threads, top: "45%", left: "74%", animationDelay: "1.1s", duration: "5.9s" },
  { id: "chatgpt", name: "ChatGPT", Logo: SocialLogos.ChatGPT, top: "45%", left: "87%", animationDelay: "2.1s", duration: "6.7s" },
  { id: "facebook", name: "Facebook", Logo: SocialLogos.Facebook, top: "59%", left: "81%", animationDelay: "0.9s", duration: "6.1s" },

  // Bottom row
  { id: "gdrive", name: "Google Drive", Logo: SocialLogos.GoogleDrive, top: "74%", left: "9%", animationDelay: "1.6s", duration: "6.6s" },
  { id: "instagram", name: "Instagram", Logo: SocialLogos.Instagram, top: "72%", left: "25%", animationDelay: "0.4s", duration: "5.7s" },
  { id: "tiktok", name: "TikTok", Logo: SocialLogos.TikTok, top: "80%", left: "41%", animationDelay: "2.2s", duration: "7.1s" },
  { id: "dropbox", name: "Dropbox", Logo: SocialLogos.Dropbox, top: "78%", left: "55%", animationDelay: "1.3s", duration: "6.3s" },
  { id: "zapier", name: "Zapier", Logo: SocialLogos.Zapier, top: "79%", left: "84%", animationDelay: "0.7s", duration: "5.6s" }
];

export default function WorkspaceHero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "https://app.kreatoraistudio.com";
    }, 1200);
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background Grid Pattern - matching reference image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 77, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 77, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)"
        }}
      />

      {/* Radial soft center lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124, 77, 255, 0.15), rgba(169, 125, 255, 0.05) 50%, transparent 75%)",
          filter: "blur(60px)"
        }}
      />

      {/* Floating Social Media & Integration Logo Badges */}
      <div className="absolute inset-0 pointer-events-none z-10 max-w-[1300px] mx-auto overflow-hidden hidden sm:block">
        {FLOATING_BADGES.map((badge) => {
          const LogoComponent = badge.Logo;
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
              <div className="flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(124,77,255,0.15)] group-hover:border-purple-500/50 group-hover:shadow-purple-500/25 transition-all">
                <LogoComponent />
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        
        {/* Top Pills */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          KreatorAI Workspace
        </div>

        {/* Main Headline - Matching image title: "Your social media workspace" */}
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
          Your social media <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            workspace
          </span>
        </h1>

        {/* Subtitle - Matching image: "Connected to every platform and tool you use." */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          Connected to every platform and tool you use.
        </p>

        {/* Email Signup Form Bar - Matching image design with green pill action button */}
        <div className="max-w-xl mx-auto mb-5">
          {submitted ? (
            <div className="p-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 animate-bounce">
              <span>✓ Welcome aboard! Redirecting to studio...</span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 p-1.5 sm:pl-5 sm:pr-1.5 rounded-2xl sm:rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-300 dark:border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.12)] focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="w-full sm:flex-1 py-3 px-3 sm:px-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base outline-none border-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(52,211,153,0.4)] cursor-pointer whitespace-nowrap"
              >
                <span>Get started for free</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Micro-text footer below input - matching reference image */}
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          By entering your email, you agree to receive updates from KreatorAI. Free 25 credits included.
        </p>
      </div>

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes floatBadge {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(2deg);
          }
          100% {
            transform: translateY(6px) rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
}
