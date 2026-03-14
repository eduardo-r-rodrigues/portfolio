"use client";

function HankoSeal() {
  return (
    <svg
      width="150" height="150" viewBox="0 0 150 150"
      className="seal-appear"
      aria-label="Eduardo Rosa Rodrigues — Developer"
    >
      {/* Outer ring */}
      <circle cx="75" cy="75" r="68" fill="none" stroke="var(--vermilion)" strokeWidth="2.5" />
      {/* Inner ring */}
      <circle cx="75" cy="75" r="60" fill="none" stroke="var(--vermilion)" strokeWidth="0.7" opacity="0.45" />
      {/* Horizontal rules */}
      <line x1="22" y1="55" x2="128" y2="55" stroke="var(--vermilion)" strokeWidth="0.6" opacity="0.3" />
      <line x1="22" y1="95" x2="128" y2="95" stroke="var(--vermilion)" strokeWidth="0.6" opacity="0.3" />
      {/* Initials */}
      <text
        x="75" y="74"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono)"
        fontSize="22" fontWeight="700"
        fill="var(--vermilion)" letterSpacing="4"
      >
        ERR
      </text>
      {/* Subtitle — 開発者 = "developer" in Japanese */}
      <text
        x="75" y="89"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans)"
        fontSize="9.5"
        fill="var(--vermilion)" letterSpacing="5" opacity="0.75"
      >
        開発者
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      {/* Ink wash background shapes */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Main large brushstroke wash — upper right */}
        <path
          d="M400,0 C600,-20 900,30 1250,10 L1250,320 C1000,350 700,310 480,330 C300,345 150,310 0,350 L0,180 C80,150 250,20 400,0 Z"
          fill="rgba(26,20,16,0.032)"
        />
        {/* Vermilion warm wash — bottom right */}
        <ellipse cx="1080" cy="680" rx="340" ry="200" fill="rgba(190,58,26,0.04)" />
        {/* Small ink smudge — top left */}
        <ellipse cx="80" cy="120" rx="180" ry="100" fill="rgba(26,20,16,0.022)" />
        {/* Mid wash — left */}
        <ellipse cx="-40" cy="500" rx="200" ry="150" fill="rgba(26,20,16,0.018)" />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "1100px", margin: "0 auto",
          padding: "130px 24px 80px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Text block */}
        <div style={{ flex: "1 1 380px" }}>

          {/* Role label */}
          <p
            className="ink-bloom"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "10px",
              letterSpacing: "0.24em",
              color: "var(--vermilion)",
              textTransform: "uppercase",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "var(--vermilion)", opacity: 0.6 }} />
            Fullstack Software Developer
          </p>

          {/* Name */}
          <h1 style={{ margin: 0, marginBottom: "10px" }}>
            <span
              className="ink-bloom-1"
              style={{
                display: "block",
                fontSize: "clamp(54px, 8vw, 92px)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
              }}
            >
              Eduardo
            </span>
            <span
              className="ink-bloom-2"
              style={{
                display: "block",
                fontSize: "clamp(54px, 8vw, 92px)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--ink-3)",
              }}
            >
              Rosa Rodrigues
            </span>
          </h1>

          {/* Brushstroke underline */}
          <svg
            className="ink-bloom-2"
            width="110" height="10" viewBox="0 0 110 10"
            style={{ display: "block", margin: "28px 0" }}
            aria-hidden="true"
          >
            <path
              d="M2,6 C18,3 38,8 58,5 C75,3 92,7 108,5"
              stroke="var(--vermilion)" strokeWidth="1.8"
              fill="none" strokeLinecap="round" opacity="0.65"
            />
          </svg>

          {/* Tagline */}
          <p
            className="ink-bloom-3"
            style={{
              fontSize: "clamp(15px, 1.7vw, 17px)",
              color: "var(--muted)",
              maxWidth: "460px",
              lineHeight: 1.8,
              marginBottom: "48px",
              fontWeight: 300,
            }}
          >
            Engineering full-stack systems — from hexagonal architecture backends
            to pixel-precise Angular and React interfaces.
          </p>

          {/* CTAs */}
          <div
            className="ink-bloom-4"
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 30px",
                background: "var(--ink)", color: "var(--bg)",
                fontWeight: 500, fontSize: "11px",
                borderRadius: "2px",
                textDecoration: "none",
                letterSpacing: "0.14em", textTransform: "uppercase",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--vermilion)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
            >
              View Work
            </a>
            <a
              href="https://github.com/eduardo-r-rodrigues"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 30px",
                background: "transparent", color: "var(--ink)",
                fontWeight: 400, fontSize: "11px",
                borderRadius: "2px",
                border: "1px solid var(--border-strong)",
                textDecoration: "none",
                letterSpacing: "0.14em", textTransform: "uppercase",
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
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Hanko seal — hidden on mobile */}
        <div className="hidden sm:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <HankoSeal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="ink-bloom-4"
        style={{
          position: "absolute", bottom: "36px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0",
        }}
      >
        <div
          style={{
            width: "1px", height: "52px",
            background: "linear-gradient(to bottom, var(--vermilion), transparent)",
            opacity: 0.5,
          }}
        />
      </div>
    </section>
  );
}
