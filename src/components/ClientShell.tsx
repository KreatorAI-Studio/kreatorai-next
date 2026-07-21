"use client";
import { useEffect, useState } from "react";

export default function ClientShell() {
  const [progress, setProgress] = useState(0);
  const [showBtt, setShowBtt] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowBtt(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div style={{
        position: "fixed", top: 0, left: 0, height: 2, width: `${progress}%`,
        background: "linear-gradient(135deg,#7c4dff 0%,#bf5cff 52%,#ff4d8d 100%)",
        zIndex: 600, transition: "width .1s linear", pointerEvents: "none",
        boxShadow: "0 0 8px rgba(124,77,255,.55)",
      }} />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 400,
          width: 44, height: 44, borderRadius: 12,
          background: "rgba(255,255,255,.05)",
          border: "1px solid rgba(169,125,255,.3)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          cursor: "pointer", display: showBtt ? "flex" : "none",
          alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", color: "var(--p3)", transition: "all .25s",
          boxShadow: "0 4px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.08)",
        }}
      >↑</button>
    </>
  );
}
