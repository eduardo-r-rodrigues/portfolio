"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    name: "FluiMap",
    description:
      "Team dynamics analytics platform. Managers distribute surveys via email and visualize team relationship networks through an interactive dashboard.",
    stack: ["Next.js", "MongoDB", "TypeScript", "Docker", "Clerk"],
    github: "https://github.com/caBatista/fluimap",
    demo: null,
    badge: null,
  },
  {
    number: "02",
    name: "Feedbackz",
    description:
      "Social media platform for peer feedback and reward tracking. Led the team as Team Leader — concept, Figma design, tech stack decisions, and fullstack development.",
    stack: ["Next.js", "React", "MySQL"],
    github: "https://github.com/Hackatona-2025",
    demo: null,
    badge: "10th Hackathon PUCRS · 2025",
  },
  {
    number: "03",
    name: "Microservices Architecture",
    description:
      "Academic project exploring distributed microservices with independent deployable services, inter-service communication patterns, and modular system design.",
    stack: ["Java", "Spring Boot", "JavaScript"],
    github: "https://github.com/eduardo-r-rodrigues/t1-projarq-pucrs",
    demo: null,
    badge: "PUCRS · Academic",
  },
];

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: "var(--bg-2)",
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
          03
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
            Projects
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Selected work
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card ink-reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "32px 28px 28px",
                background: "var(--bg)",
                borderTop: "3px solid var(--ink)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Large faint project number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-10px", right: "16px",
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "72px", fontWeight: 900, lineHeight: 1,
                  color: "var(--ink)", opacity: 0.045,
                  letterSpacing: "-0.05em",
                  userSelect: "none", pointerEvents: "none",
                }}
              >
                {project.number}
              </span>

              <div style={{ flex: 1, position: "relative" }}>
                {/* Badge */}
                {project.badge && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "9px",
                      padding: "3px 9px",
                      borderRadius: "1px",
                      background: "var(--vermilion-dim)",
                      color: "var(--vermilion)",
                      letterSpacing: "0.08em",
                      marginBottom: "16px",
                      border: "1px solid rgba(190,58,26,0.18)",
                    }}
                  >
                    {project.badge}
                  </span>
                )}

                <h3
                  style={{
                    fontSize: "17px", fontWeight: 600,
                    color: "var(--ink)", marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontSize: "13px", color: "var(--muted)",
                    lineHeight: 1.75, marginBottom: "24px",
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "10px",
                        padding: "3px 8px",
                        border: "1px solid var(--border-strong)",
                        color: "var(--ink-3)",
                        borderRadius: "1px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "12px", color: "var(--muted)",
                    textDecoration: "none", letterSpacing: "0.06em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--vermilion)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
