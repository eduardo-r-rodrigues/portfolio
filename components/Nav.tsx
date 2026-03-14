"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background:    scrolled ? "rgba(244, 237, 224, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom:  scrolled ? "1px solid rgba(26, 20, 16, 0.10)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px", margin: "0 auto", padding: "0 24px",
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
          height: "64px",
        }}
      >
        {/* Logo — small hanko seal */}
        <a href="#" style={{ textDecoration: "none", lineHeight: 0 }}>
          <svg width="34" height="34" viewBox="0 0 34 34" aria-label="ERR">
            <circle cx="17" cy="17" r="15" fill="none" stroke="#be3a1a" strokeWidth="2" />
            <circle cx="17" cy="17" r="12" fill="none" stroke="#be3a1a" strokeWidth="0.6" opacity="0.45" />
            <text
              x="17" y="22"
              textAnchor="middle"
              fontFamily="var(--font-geist-mono)"
              fontSize="9" fontWeight="700"
              fill="#be3a1a" letterSpacing="1.5"
            >
              ERR
            </text>
          </svg>
        </a>

        {/* Desktop links */}
        <ul
          style={{ gap: "36px", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden sm:flex"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: "11px", fontWeight: 400,
                  color: "var(--muted)", textDecoration: "none",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--vermilion)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — 3rd column, right-aligned */}
        <button
          className="flex sm:hidden"
          style={{ marginLeft: "auto" }}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "5px", padding: "4px" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: "22px", height: "1.5px",
                background: "var(--ink-3)",
                transition: "all 0.25s ease",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)" :
                  menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(244, 237, 224, 0.97)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
          className="sm:hidden"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block", padding: "12px 0",
                    fontSize: "14px", color: "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
