"use client";

import { useEffect, useRef } from "react";

const langs = [
  { lang: "Portuguese", level: "Native",       bar: 1.00 },
  { lang: "English",    level: "Fluent",        bar: 0.90 },
  { lang: "Spanish",    level: "Intermediate",  bar: 0.55 },
];

export default function Languages() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".ink-reveal").forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = `${i * 0.09}s`;
            el.classList.add("ink-revealed");
          });
          ref.current?.querySelectorAll(".lang-bar-fill").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.transform = "scaleX(1)";
            }, 300 + i * 130);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="languages"
      ref={ref}
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        padding: "110px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* Background section number */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute", top: "-20px", right: "0",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(80px, 14vw, 140px)",
            fontWeight: 900, lineHeight: 1,
            color: "var(--ink)", opacity: 0.04,
            letterSpacing: "-0.05em",
            userSelect: "none", pointerEvents: "none",
          }}
        >
          05
        </span>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}
          className="langs-grid"
        >
          <style>{`@media (max-width: 700px) { .langs-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>

          {/* Left */}
          <div className="ink-reveal">
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "10px", letterSpacing: "0.2em",
                color: "var(--vermilion)", textTransform: "uppercase",
                marginBottom: "16px",
                display: "flex", alignItems: "center", gap: "10px",
              }}
            >
              <span style={{ display: "inline-block", width: "20px", height: "1px", background: "var(--vermilion)", opacity: 0.6 }} />
              Languages
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "var(--ink)", lineHeight: 1.15, marginBottom: "16px",
              }}
            >
              Communication
            </h2>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>
              A study exchange at Burnaby North Secondary School in Canada (2023)
              sharpened my professional English and cross-cultural collaboration skills.
            </p>
          </div>

          {/* Right — bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {langs.map((l) => (
              <div key={l.lang} className="ink-reveal">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink)", fontWeight: 500 }}>{l.lang}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "10px", color: "var(--muted)",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}
                  >
                    {l.level}
                  </span>
                </div>

                {/* Brushstroke bar */}
                <div
                  style={{
                    height: "5px",
                    background: "rgba(26,20,16,0.08)",
                    borderRadius: "1px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    className="lang-bar-fill"
                    style={{
                      height: "100%",
                      width: `${l.bar * 100}%`,
                      background: l.bar === 1
                        ? "var(--ink)"
                        : l.bar >= 0.8
                        ? "var(--ink-2)"
                        : "var(--ink-3)",
                      borderRadius: "1px 2px 2px 1px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
