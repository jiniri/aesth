import { GALLERY_ITEMS } from "../data/index.js";

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-header">
        <div className="section-eyebrow fade-up">Transformations</div>
        <h2 className="section-title fade-up" style={{ marginTop: 16 }}>
          Before &amp; <em>After</em> Gallery
        </h2>
      </div>

      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`gallery-item fade-up stagger-${Math.min(i + 1, 5)}`}
            style={!item.span ? { height: 240 } : undefined}
          >
            {/* Colour-gradient placeholder */}
            <div
              className="gallery-img"
              style={{ background: item.bg, height: "100%" }}
            >
              <svg width="80" height="110" viewBox="0 0 100 140" fill="none" opacity="0.35">
                <ellipse cx="50" cy="44" rx="28" ry="34" fill="rgba(255,255,255,0.3)" />
                <path
                  d="M28 76 Q50 100 72 76"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {item.badge && <div className="gallery-badge">{item.badge}</div>}

            <div className="gallery-overlay">
              <span className="gallery-label">{item.label} ↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
