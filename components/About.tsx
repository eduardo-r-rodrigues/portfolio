"use client";

import { useEffect, useRef } from "react";

function useInkReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.12) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".ink-reveal").forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = `${i * 0.09}s`;
            el.classList.add("ink-revealed");
          });
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useInkReveal(ref);

  return (
    <section
      id="about"
      ref={ref}
      style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", padding: "110px 24px", overflow: "hidden" }}
    >
      {/* Background section number */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute", top: "20px", right: "16px",
          fontFamily: "var(--font-geist-mono)",
          fontSize: "clamp(80px, 14vw, 140px)",
          fontWeight: 900, lineHeight: 1,
          color: "var(--ink)", opacity: 0.04,
          letterSpacing: "-0.05em",
          userSelect: "none", pointerEvents: "none",
        }}
      >
        01
      </span>

      {/* Two-column grid */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        className="about-grid"
      >
        <style>{`@media (max-width: 700px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>

        {/* Left */}
        <div className="ink-reveal">
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "10px", letterSpacing: "0.2em",
              color: "var(--vermilion)", textTransform: "uppercase",
              marginBottom: "20px",
              display: "flex", alignItems: "center", gap: "10px",
            }}
          >
            <span style={{ display: "inline-block", width: "20px", height: "1px", background: "var(--vermilion)", opacity: 0.6 }} />
            About
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "0",
            }}
          >
            Still studying.
            <br />
            Already building
            <br />
            <span style={{ color: "var(--vermilion)", fontWeight: 300 }}>at scale.</span>
          </h2>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <p
            className="ink-reveal"
            style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}
          >
            Software Engineering student at PUCRS (Dec 2027), currently a Fullstack Developer
            Intern at Aegro — where I work across the full stack, from hexagonal architecture
            backends in Spring Boot to reusable Angular component libraries.
          </p>

          <p
            className="ink-reveal"
            style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}
          >
            I&apos;ve led teams through hackathons, shipped features to production, and studied
            abroad in Canada — sharpening both my technical craft and my ability to work across
            cultures and time zones.
          </p>

          {/* Quick facts */}
          <div className="ink-reveal" style={{ display: "flex", gap: "32px", flexWrap: "wrap", paddingTop: "8px" }}>
            {[
              { label: "Based in",   value: "Porto Alegre, BR" },
              { label: "Studying",   value: "PUCRS · Eng. Software" },
              { label: "Working at", value: "Aegro Informática" },
            ].map((fact) => (
              <div key={fact.label}>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "9px", color: "var(--muted)",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    marginBottom: "5px",
                  }}
                >
                  {fact.label}
                </p>
                <p style={{ fontSize: "13px", color: "var(--ink)", fontWeight: 500 }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section brushstroke divider */}
      <div className="ink-reveal" style={{ marginTop: "80px" }}>
        <svg width="100%" height="6" viewBox="0 0 1100 6" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,3 C100,1 250,5 450,3 C600,1 750,4.5 900,3 C1000,2 1060,3.5 1100,3"
            stroke="var(--border-strong)" strokeWidth="1" fill="none" strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
