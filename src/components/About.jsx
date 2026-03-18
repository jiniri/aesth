import { ABOUT_CERTS, ABOUT_FEATURES } from "../data/index.js";
import { CheckCircle, PersonIcon } from "./Icons.jsx";

export default function About() {
  return (
    <section className="about" id="about">
      {/* ── Left: image panel ── */}
      <div className="about-image">
        <div className="about-image-overlay" />

        {/* Decorative physician silhouette */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none" opacity="0.35">
            <ellipse cx="150" cy="120" rx="75" ry="90" fill="rgba(255,255,255,0.3)" />
            <rect x="80" y="200" width="140" height="180" rx="12" fill="rgba(255,255,255,0.2)" />
            <rect x="100" y="160" width="100" height="60" rx="8" fill="rgba(255,255,255,0.15)" />
            <path d="M120 240 Q150 260 180 240" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
            <ellipse cx="128" cy="108" rx="10" ry="7" fill="rgba(255,255,255,0.5)" />
            <ellipse cx="172" cy="108" rx="10" ry="7" fill="rgba(255,255,255,0.5)" />
            <circle cx="150" cy="280" r="14" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
            <line x1="150" y1="266" x2="150" y2="294" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
            <line x1="136" y1="280" x2="164" y2="280" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          </svg>
        </div>

        {/* Credentials ribbon */}
        <div className="about-cert-ribbon">
          {ABOUT_CERTS.map((c) => (
            <div className="cert-item" key={c}>
              <div className="cert-dot" />
              {c}
            </div>
          ))}
        </div>

        {/* Doctor card */}
        <div className="about-doc-card">
          <div className="about-doc-avatar">
            <PersonIcon color="white" />
          </div>
          <div className="about-doc-name">Dr. Isabella Chen, MD</div>
          <div className="about-doc-title">Lead Aesthetic Physician</div>
        </div>
      </div>

      {/* ── Right: copy ── */}
      <div className="about-content">
        <div className="section-eyebrow fade-up">About Lumière</div>
        <h2 className="section-title fade-up" style={{ marginTop: 20 }}>
          Where Medicine<br />Meets <em>Artistry</em>
        </h2>
        <p className="about-text fade-up">
          At Lumière Aesthetics, we believe beauty is deeply personal. Founded
          by Dr. Isabella Chen with a decade of clinical excellence, our clinic
          combines evidence-based medicine with a refined aesthetic eye. Every
          treatment plan is individually designed — never generic, always
          exceptional.
        </p>

        <div className="about-features fade-up">
          {ABOUT_FEATURES.map((f) => (
            <div className="about-feature" key={f.title}>
              <div className="af-icon">
                <CheckCircle />
              </div>
              <div className="af-title">{f.title}</div>
              <div className="af-desc">{f.desc}</div>
            </div>
          ))}
        </div>

        <a href="#about" className="btn-primary fade-up">
          <span>Meet Our Team</span>
        </a>
      </div>
    </section>
  );
}
