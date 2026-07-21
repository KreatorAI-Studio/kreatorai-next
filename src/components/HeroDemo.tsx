"use client";

import { useState } from "react";

export default function HeroDemo() {
  const [activeTab, setActiveTab] = useState<"script" | "video" | "voice" | "schedule">("script");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      maxWidth: 900,
      margin: "48px auto 0",
      position: "relative",
      zIndex: 2,
    }}>
      {/* Glow background behind preview card */}
      <div style={{
        position: "absolute",
        top: -30, left: "10%", right: "10%", bottom: 0,
        background: "radial-gradient(ellipse at 50% 30%, rgba(124, 77, 255, 0.25), transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(15, 15, 26, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(169, 125, 255, 0.3)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      }}>
        {/* Top macOS-style window header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          background: "rgba(7, 7, 15, 0.6)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f" }} />
            <span style={{
              fontFamily: "var(--fh)",
              fontSize: ".75rem",
              fontWeight: 700,
              color: "var(--text2)",
              marginLeft: 8,
              letterSpacing: ".02em",
            }}>
              KreatorAI Studio · Interactive Preview
            </span>
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "3px 10px",
            borderRadius: 100,
            background: "rgba(34, 197, 94, 0.12)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 6px #22c55e",
              animation: "blink 2s ease infinite",
            }} />
            <span style={{
              fontFamily: "var(--fh)",
              fontSize: ".62rem",
              fontWeight: 700,
              color: "#4ade80",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
              250 Credits Active
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          padding: "8px 16px",
          gap: 6,
          overflowX: "auto",
          background: "rgba(255, 255, 255, 0.015)",
        }}>
          {[
            { id: "script", label: "⚡ AI Script", cost: "12 cr" },
            { id: "video", label: "🎬 AI Video", cost: "50 cr" },
            { id: "voice", label: "🎙️ Voiceover", cost: "25 cr" },
            { id: "schedule", label: "📅 Publisher", cost: "Free" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 12,
                  fontFamily: "var(--fh)",
                  fontSize: ".8rem",
                  fontWeight: 700,
                  color: isActive ? "#fff" : "var(--text2)",
                  background: isActive ? "rgba(124, 77, 255, 0.22)" : "transparent",
                  border: isActive ? "1px solid rgba(169, 125, 255, 0.4)" : "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>{tab.label}</span>
                <span style={{
                  fontSize: ".65rem",
                  padding: "2px 6px",
                  borderRadius: 6,
                  background: isActive ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  color: isActive ? "var(--p3)" : "var(--text3)",
                }}>
                  {tab.cost}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab content area */}
        <div style={{ padding: "24px 28px", minHeight: 220 }}>
          {activeTab === "script" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.2rem" }}>🎯</span>
                  <div>
                    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".9rem", color: "var(--text)" }}>
                      Niche-Optimised Hook & Script
                    </div>
                    <div style={{ fontSize: ".75rem", color: "var(--text2)" }}>Target: YouTube Shorts & Instagram Reels</div>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    background: copied ? "rgba(34, 197, 94, 0.2)" : "rgba(255, 255, 255, 0.06)",
                    border: copied ? "1px solid rgba(34, 197, 94, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: copied ? "#4ade80" : "var(--text2)",
                    fontFamily: "var(--fh)",
                    fontSize: ".75rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? "✓ Copied!" : "Copy Script"}
                </button>
              </div>

              <div style={{
                background: "rgba(7, 7, 15, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: 14,
                padding: "16px 20px",
                fontFamily: "monospace",
                fontSize: ".82rem",
                lineHeight: 1.7,
                color: "var(--p3)",
              }}>
                <div style={{ color: "#ff85b3", fontWeight: 700, marginBottom: 6 }}>
                  [0:00 - 0:03] HOOK:
                </div>
                "Stop wasting 4 hours on video edits. Here's how creators automate their whole pipeline in 3 clicks..."
                <div style={{ color: "var(--p2)", fontWeight: 700, margin: "12px 0 6px" }}>
                  [0:03 - 0:15] BODY:
                </div>
                "1. Generate your script with AI retention hooks.<br />
                2. Turn text directly into 4K video scenes.<br />
                3. Auto-publish across IG, TikTok & YouTube simultaneously."
              </div>
            </div>
          )}

          {activeTab === "video" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.2rem" }}>🎬</span>
                  <div>
                    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".9rem", color: "var(--text)" }}>
                      Text-to-Video Engine (Veo 2 & Luma)
                    </div>
                    <div style={{ fontSize: ".75rem", color: "var(--text2)" }}>Aspect Ratio: 9:16 (Vertical HD)</div>
                  </div>
                </div>

                <span style={{
                  padding: "4px 10px",
                  borderRadius: 100,
                  background: "rgba(124, 77, 255, 0.15)",
                  border: "1px solid rgba(124, 77, 255, 0.3)",
                  fontFamily: "var(--fh)",
                  fontSize: ".7rem",
                  fontWeight: 700,
                  color: "var(--p3)",
                }}>
                  Status: Rendered in 3.2s
                </span>
              </div>

              <div style={{
                height: 120,
                background: "linear-gradient(135deg, rgba(124, 77, 255, 0.15), rgba(255, 77, 141, 0.15))",
                borderRadius: 14,
                border: "1px solid rgba(169, 125, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%)",
                }} />
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <div style={{ fontSize: "2rem", marginBottom: 4 }}>🎥</div>
                  <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".85rem", color: "var(--text)" }}>
                    "Cinematic futuristic city with purple neon light stream..."
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "voice" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.2rem" }}>🎙️</span>
                  <div>
                    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".9rem", color: "var(--text)" }}>
                      ElevenLabs Neural Voice Synthesis
                    </div>
                    <div style={{ fontSize: ".75rem", color: "var(--text2)" }}>Selected Voice: Adam (Deep Narrative)</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: "rgba(7, 7, 15, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: 14,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--grad)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", color: "#fff",
                  boxShadow: "0 0 20px rgba(124, 77, 255, 0.4)",
                  cursor: "pointer",
                }}>
                  ▶
                </div>

                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 3, height: 28 }}>
                  {[40, 70, 30, 90, 60, 100, 45, 80, 50, 90, 75, 40, 85, 95, 60, 30, 70, 80, 40, 60].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i < 10 ? "var(--p2)" : "rgba(255, 255, 255, 0.15)",
                        borderRadius: 4,
                      }}
                    />
                  ))}
                </div>

                <span style={{ fontFamily: "var(--fh)", fontSize: ".8rem", color: "var(--text2)", fontWeight: 600 }}>
                  0:14 / 0:30
                </span>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".9rem", color: "var(--text)" }}>
                Multi-Platform Queue Status
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
                {[
                  { platform: "Instagram Reel", time: "Today, 6:00 PM", status: "Scheduled", icon: "📸" },
                  { platform: "LinkedIn Post", time: "Tomorrow, 9:00 AM", status: "Queued", icon: "💼" },
                  { platform: "YouTube Short", time: "Friday, 4:00 PM", status: "Draft", icon: "▶️" },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: "rgba(7, 7, 15, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: 12,
                    padding: "12px 14px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                      <span style={{
                        fontSize: ".62rem",
                        fontFamily: "var(--fh)",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: 100,
                        background: "rgba(124, 77, 255, 0.15)",
                        color: "var(--p3)",
                      }}>
                        {item.status}
                      </span>
                    </div>
                    <div style={{ fontFamily: "var(--fh)", fontWeight: 700, fontSize: ".82rem", color: "var(--text)" }}>
                      {item.platform}
                    </div>
                    <div style={{ fontSize: ".72rem", color: "var(--text2)", marginTop: 2 }}>
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
