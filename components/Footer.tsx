export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Hanko seal */}
        <svg width="28" height="28" viewBox="0 0 28 28" aria-label="ERR">
          <circle cx="14" cy="14" r="12" fill="none" stroke="#be3a1a" strokeWidth="1.5" />
          <text
            x="14" y="18"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono)"
            fontSize="7" fontWeight="700"
            fill="#be3a1a" letterSpacing="1"
          >
            ERR
          </text>
        </svg>

        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "11px",
            color: "rgba(244,237,224,0.28)",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 Eduardo Rosa Rodrigues
        </p>

        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "11px",
            color: "rgba(244,237,224,0.28)",
            letterSpacing: "0.08em",
          }}
        >
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
