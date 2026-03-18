import { HERO_STATS } from "../data/index.js";
import { ArrowRight } from "./Icons.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ── Left: copy ── */}
      <div className="hero-content">
        <div className="hero-eyebrow animate-on-load delay-1">
          Award-Winning Aesthetic Clinic
        </div>

        <h1 className="hero-headline animate-on-load delay-2">
          Enhance Your<br />
          <em>Natural Beauty</em>
        </h1>

        <p className="hero-sub animate-on-load delay-3">
          Science-led treatments tailored to you. Restore confidence and reveal
          your most radiant self through our bespoke aesthetic therapies.
        </p>

        <div className="hero-actions animate-on-load delay-4">
          <a href="#booking" className="btn-primary">
            <span>Book Appointment</span>
          </a>
          <a href="#services" className="btn-secondary">
            Explore Treatments <ArrowRight />
          </a>
        </div>
      </div>

      {/* ── Right: visual ── */}
      <div className="hero-image">
        <div className="hero-image-inner">
          <div className="hero-portrait">
            <svg
              width="200" height="280"
              viewBox="0 0 200 280"
              fill="none"
              opacity="0.6"
            >
              <ellipse cx="100" cy="100" rx="62" ry="78" fill="rgba(255,255,255,0.25)" />
              <path d="M60 160 Q100 220 140 160" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
              <ellipse cx="78"  cy="90" rx="8" ry="5" fill="rgba(255,255,255,0.5)" />
              <ellipse cx="122" cy="90" rx="8" ry="5" fill="rgba(255,255,255,0.5)" />
              <path d="M88 115 Q100 122 112 115" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <line x1="100" y1="178" x2="100" y2="270" stroke="rgba(255,255,255,0.2)" strokeWidth="24" strokeLinecap="round" />
              <ellipse cx="100" cy="178" rx="38" ry="24" fill="rgba(255,255,255,0.15)" />
            </svg>
          </div>
          <div className="hero-deco-ring" />
        </div>

        {/* Floating tag */}
        <div className="hero-tag">
          <div className="hero-tag-label">Certified Excellence</div>
          <div className="hero-tag-value">10+ Years of Trust</div>
        </div>

        {/* Stats column */}
        <div className="hero-stats">
          {HERO_STATS.map(({ num, label }) => (
            <div className="hero-stat" key={label}>
              <span className="hero-stat-num">{num}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
