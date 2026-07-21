"use client";

import { useState } from "react";

export default function CreditCalculator() {
  const [scripts, setScripts] = useState(10);
  const [images, setImages] = useState(10);
  const [videos, setVideos] = useState(4);
  const [voiceovers, setVoiceovers] = useState(5);

  const totalCredits = (scripts * 12) + (images * 20) + (videos * 50) + (voiceovers * 25);

  let recommendedPlan = { name: "Free", price: "$0/mo", credits: 25, color: "#8A8AA0" };
  if (totalCredits > 800) {
    recommendedPlan = { name: "Studio", price: "$219/mo", credits: 2250, color: "#06B6D4" };
  } else if (totalCredits > 250) {
    recommendedPlan = { name: "Max", price: "$89/mo", credits: 800, color: "#F59E0B" };
  } else if (totalCredits > 25) {
    recommendedPlan = { name: "Starter", price: "$29/mo", credits: 250, color: "#7C5CFC" };
  }

  return (
    <div style={{
      maxWidth: 960,
      margin: "64px auto",
      padding: "36px 40px",
      borderRadius: 24,
      background: "rgba(15, 15, 26, 0.75)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(169, 125, 255, 0.3)",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 12px",
          borderRadius: 100,
          background: "rgba(124, 77, 255, 0.12)",
          border: "1px solid rgba(124, 77, 255, 0.3)",
          fontFamily: "var(--fh)",
          fontSize: ".65rem",
          fontWeight: 700,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: "var(--p3)",
          marginBottom: 10,
        }}>
          🧮 Interactive Calculator
        </div>
        <h3 style={{
          fontFamily: "var(--fh)",
          fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
          fontWeight: 800,
          letterSpacing: "-.03em",
          color: "var(--text)",
        }}>
          Estimate Your Monthly Usage
        </h3>
        <p style={{ fontSize: ".88rem", color: "var(--text2)", marginTop: 4 }}>
          Adjust expected content volume to discover the perfect plan for your creator workflow.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 36,
        alignItems: "center",
      }}>
        {/* Sliders column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".84rem", fontFamily: "var(--fh)", fontWeight: 700, marginBottom: 8 }}>
              <span style={{ color: "var(--text)" }}>📝 Scripts & Descriptions</span>
              <span style={{ color: "var(--p3)" }}>{scripts} / month ({scripts * 12} cr)</span>
            </div>
            <input
              type="range" min="0" max="50" value={scripts}
              onChange={(e) => setScripts(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--p1)", cursor: "pointer" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".84rem", fontFamily: "var(--fh)", fontWeight: 700, marginBottom: 8 }}>
              <span style={{ color: "var(--text)" }}>🖼️ AI Images & Thumbnails</span>
              <span style={{ color: "var(--p3)" }}>{images} / month ({images * 20} cr)</span>
            </div>
            <input
              type="range" min="0" max="50" value={images}
              onChange={(e) => setImages(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--p1)", cursor: "pointer" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".84rem", fontFamily: "var(--fh)", fontWeight: 700, marginBottom: 8 }}>
              <span style={{ color: "var(--text)" }}>🎬 AI Videos (Text / Img to Video)</span>
              <span style={{ color: "var(--p3)" }}>{videos} / month ({videos * 50} cr)</span>
            </div>
            <input
              type="range" min="0" max="25" value={videos}
              onChange={(e) => setVideos(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--p1)", cursor: "pointer" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".84rem", fontFamily: "var(--fh)", fontWeight: 700, marginBottom: 8 }}>
              <span style={{ color: "var(--text)" }}>🎙️ Voiceovers & Captions</span>
              <span style={{ color: "var(--p3)" }}>{voiceovers} / month ({voiceovers * 25} cr)</span>
            </div>
            <input
              type="range" min="0" max="30" value={voiceovers}
              onChange={(e) => setVoiceovers(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--p1)", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Calculation Result Box */}
        <div style={{
          background: "linear-gradient(145deg, rgba(124, 77, 255, 0.12), rgba(255, 77, 141, 0.08))",
          border: "1.5px solid rgba(169, 125, 255, 0.4)",
          borderRadius: 20,
          padding: "28px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ fontSize: ".78rem", fontFamily: "var(--fh)", fontWeight: 700, color: "var(--text2)", textTransform: "uppercase", letterSpacing: ".08em" }}>
            Estimated Total Usage
          </div>
          <div style={{
            fontFamily: "var(--fh)",
            fontSize: "2.6rem",
            fontWeight: 800,
            background: "var(--grad)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "4px 0 16px",
          }}>
            {totalCredits.toLocaleString()} <span style={{ fontSize: "1rem", WebkitTextFillColor: "var(--text2)" }}>credits/mo</span>
          </div>

          <div style={{
            width: "100%",
            padding: "12px",
            borderRadius: 12,
            background: "rgba(7, 7, 15, 0.6)",
            border: `1px solid ${recommendedPlan.color}`,
            marginBottom: 16,
          }}>
            <div style={{ fontSize: ".72rem", color: "var(--text2)" }}>Recommended Tier</div>
            <div style={{ fontFamily: "var(--fh)", fontWeight: 800, fontSize: "1.2rem", color: recommendedPlan.color, marginTop: 2 }}>
              {recommendedPlan.name} Plan ({recommendedPlan.price})
            </div>
            <div style={{ fontSize: ".75rem", color: "var(--text3)", marginTop: 2 }}>
              Includes {recommendedPlan.credits.toLocaleString()} monthly credits
            </div>
          </div>

          <a
            href="https://app.kreatoraistudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-p"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Get Started with {recommendedPlan.name} →
          </a>
        </div>
      </div>
    </div>
  );
}
