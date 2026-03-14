"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "eduardo-r-rodrigues@outlook.com",
    href: "mailto:eduardo-r-rodrigues@outlook.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "/in/eduardo-rosa-rodrigues",
    href: "https://www.linkedin.com/in/eduardo-rosa-rodrigues",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "/eduardo-r-rodrigues",
    href: "https://github.com/eduardo-r-rodrigues",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "120px 24px 100px", position: "relative", overflow: "hidden" }}
    >
      {/* Background ink wash */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <ellipse cx="600" cy="350" rx="500" ry="280" fill="rgba(26,20,16,0.018)" />
        <ellipse cx="600" cy="350" rx="300" ry="180" fill="rgba(190,58,26,0.025)" />
      </svg>

      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Vertical ink line before heading */}
        <div className="ink-reveal" style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, transparent, var(--vermilion))", opacity: 0.5 }} />
        </div>

        {/* Hanko seal — centered */}
        <div className="ink-reveal" style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
            <circle cx="40" cy="40" r="36" fill="none" stroke="var(--vermilion)" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="var(--vermilion)" strokeWidth="0.5" opacity="0.4" />
            <text x="40" y="44" textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="12" fontWeight="700" fill="var(--vermilion)" letterSpacing="2">ERR</text>
          </svg>
        </div>

        <p
          className="ink-reveal"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "10px", letterSpacing: "0.2em",
            color: "var(--vermilion)", textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Contact
        </p>

        <h2
          className="ink-reveal"
          style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "16px", lineHeight: 1.1,
          }}
        >
          Let&apos;s connect
        </h2>

        <p
          className="ink-reveal"
          style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "52px", fontWeight: 300 }}
        >
          Open to new opportunities, collaborations, or just a conversation about technology and software.
        </p>

        {/* Links */}
        <div
          className="ink-reveal"
          style={{ display: "flex", flexDirection: "column", marginBottom: "40px", border: "1px solid var(--border)" }}
        >
          {contactLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                background: "var(--bg-2)",
                borderTop: idx > 0 ? "1px solid var(--border)" : "none",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg-2)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ color: "var(--vermilion)", opacity: 0.8 }}>{link.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "9px", color: "var(--muted)",
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    {link.label}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--ink)", fontWeight: 400 }}>
                    {link.value}
                  </p>
                </div>
              </div>
              <span style={{ color: "var(--muted)", fontSize: "14px" }}>↗</span>
            </a>
          ))}
        </div>

        {/* Download CV */}
        <div className="ink-reveal">
          <a
            href="/cv.pdf"
            download
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 30px",
              border: "1px solid var(--border-strong)",
              borderRadius: "2px",
              color: "var(--ink)", fontSize: "11px", fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.12em", textTransform: "uppercase",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--vermilion)";
              e.currentTarget.style.color = "var(--vermilion)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
