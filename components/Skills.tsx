"use client";

import { useEffect, useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Angular", "React", "NestJS", "FastAPI", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Styling",
    items: ["TailwindCSS", "Sass"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Docker", "Linux", "Figma", "REST APIs", "CI/CD", "Agile / Scrum"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".ink-reveal").forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
            el.classList.add("ink-revealed");
          });
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: "var(--ink)",
        padding: "110px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ink wash decoration on dark bg */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <ellipse cx="1100" cy="80" rx="300" ry="200" fill="rgba(244,237,224,0.02)" />
        <ellipse cx="100" cy="520" rx="250" ry="160" fill="rgba(190,58,26,0.04)" />
      </svg>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* Background section number */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute", top: "-20px", right: "0",
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(80px, 14vw, 140px)",
            fontWeight: 900, lineHeight: 1,
            color: "rgba(244,237,224,0.04)",
            letterSpacing: "-0.05em",
            userSelect: "none", pointerEvents: "none",
          }}
        >
          02
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
            Skills
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--bg)",
            }}
          >
            Tech stack
          </h2>
        </div>

        {/* Skill groups */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "44px" }}
        >
          {skills.map((group) => (
            <div key={group.category} className="ink-reveal">
              {/* Category label */}
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "9px", letterSpacing: "0.18em",
                  color: "rgba(244,237,224,0.35)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid rgba(244,237,224,0.08)",
                }}
              >
                {group.category}
              </p>

              {/* Skills as clean text list */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "12px",
                      padding: "5px 12px",
                      border: "1px solid rgba(244,237,224,0.14)",
                      color: "rgba(244,237,224,0.72)",
                      borderRadius: "2px",
                      letterSpacing: "0.04em",
                      transition: "border-color 0.2s, color 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(190,58,26,0.5)";
                      el.style.color = "var(--vermilion)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(244,237,224,0.14)";
                      el.style.color = "rgba(244,237,224,0.72)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
