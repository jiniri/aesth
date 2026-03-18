import { TESTIMONIALS } from "../data/index.js";

function Avatar({ bg, fill }) {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="23" cy="23" r="23" fill={bg} />
      <circle cx="23" cy="18" r="8" fill={fill} />
      <path d="M8 42 C8 32 13 28 23 28 C33 28 38 32 38 42" fill={fill} />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-header">
        <div className="section-eyebrow fade-up">Client Stories</div>
        <h2 className="section-title fade-up" style={{ marginTop: 16 }}>
          Words from Our<br /><em>Clients</em>
        </h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`testi-card fade-up stagger-${i + 1}`}
          >
            <div className="testi-quote">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <Avatar bg={t.avatarBg} fill={t.avatarFill} />
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
