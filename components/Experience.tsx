"use client";

import { useEffect, useRef } from "react";

const experience = [
  {
    role: "Fullstack Web Developer Intern",
    company: "Aegro Informática",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Completed 167h Dev Academy bootcamp in Spring Boot and Angular",
      "Led the Public API initiative enabling third-party integrations across the platform",
      "Refactored and developed features for an internal quotation generator (NestJS + React)",
      "Built reusable UI components improving frontend consistency across the team",
      "Developed end-to-end features across UI, API design, and database integration",
      "Worked within a modular monolith using hexagonal (ports and adapters) architecture",
    ],
  },
  {
    role: "Team Leader & Fullstack Developer",
    company: "10th Hackathon PUCRS",
    period: "2025",
    current: false,
    bullets: [
      "Led team coordination, designed UI/UX in Figma, selected the tech stack",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Hackathon PUCRS",
    period: "2024",
    current: false,
    bullets: [
      "Built a charity project hub with React and TailwindCSS",
    ],
  },
  {
    role: "Volunteer",
    company: "Burnaby North Secondary School — Canada",
    period: "2023",
    current: false,
    bullets: [
      "Sales, customer service, and e-commerce operations during exchange program",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".ink-reveal").forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
            el.classList.add("ink-revealed");
          });
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
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
          04
        </span>

        {/* Header */}
        <div style={{ marginBottom: "64px" }} className="ink-reveal">
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
            Experience
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical ink line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "5px", top: "8px", bottom: "8px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--ink) 0%, rgba(26,20,16,0.1) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="ink-reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "32px",
                  paddingBottom: idx < experience.length - 1 ? "52px" : "0",
                }}
              >
                {/* Node */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5px" }}>
                  <div
                    style={{
                      width: "12px", height: "12px",
                      borderRadius: "50%",
                      background: job.current ? "var(--vermilion)" : "var(--bg-2)",
                      border: `2px solid ${job.current ? "var(--vermilion)" : "var(--border-strong)"}`,
                      flexShrink: 0,
                      boxShadow: job.current ? "0 0 0 4px rgba(190,58,26,0.15)" : "none",
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "5px" }}>
                    <h3
                      style={{
                        fontSize: "15px", fontWeight: 600,
                        color: "var(--ink)", letterSpacing: "-0.01em",
                      }}
                    >
                      {job.role}
                    </h3>
                    {job.current && (
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "9px",
                          padding: "2px 7px",
                          borderRadius: "1px",
                          background: "var(--vermilion-dim)",
                          color: "var(--vermilion)",
                          border: "1px solid rgba(190,58,26,0.18)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", gap: "12px", marginBottom: "14px", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 400 }}>
                      {job.company}
                    </span>
                    <span style={{ color: "var(--border-strong)", fontSize: "10px" }}>◦</span>
                    <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "11px", color: "var(--muted)" }}>
                      {job.period}
                    </span>
                  </div>

                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                    {job.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        style={{ display: "flex", gap: "10px", fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}
                      >
                        <span style={{ color: "var(--vermilion)", flexShrink: 0, marginTop: "2px", opacity: 0.7 }}>—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
