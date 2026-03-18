import { CONTACT_ITEMS, CLINIC_HOURS } from "../data/index.js";
import { LocationIcon, EmailIcon, PhoneIcon } from "./Icons.jsx";

const ICON_MAP = {
  Address: <LocationIcon />,
  Email:   <EmailIcon />,
  Phone:   <PhoneIcon />,
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* ── Left: info ── */}
      <div className="contact-info">
        <div className="section-eyebrow fade-up">Find Us</div>
        <h2 className="section-title fade-up" style={{ marginTop: 16 }}>
          Visit the<br /><em>Clinic</em>
        </h2>

        <div className="contact-items">
          {CONTACT_ITEMS.map((item) => (
            <div className="contact-item fade-up" key={item.label}>
              <div className="ci-icon">{ICON_MAP[item.label]}</div>
              <div>
                <div className="ci-label">{item.label}</div>
                <div className="ci-value">
                  {item.value.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-hours fade-up">
          <div className="ch-title">Clinic Hours</div>
          {CLINIC_HOURS.map(({ day, time }) => (
            <div className="ch-row" key={day}>
              <span className="ch-day">{day}</span>
              <span className="ch-time">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: decorative map ── */}
      <div className="contact-map">
        <div className="map-grid" />

        {/* Street grid illustration */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          viewBox="0 0 600 500"
          preserveAspectRatio="xMidYMid slice"
          opacity="0.3"
        >
          <line x1="0"   y1="200" x2="600" y2="200" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
          <line x1="0"   y1="320" x2="600" y2="320" stroke="rgba(255,255,255,0.4)" strokeWidth="5" />
          <line x1="200" y1="0"   x2="200" y2="500" stroke="rgba(255,255,255,0.5)" strokeWidth="6" />
          <line x1="380" y1="0"   x2="380" y2="500" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
          <rect x="215" y="210" width="160" height="110" rx="4" fill="rgba(255,255,255,0.15)" />
          <rect x="60"  y="215" width="130" height="80"  rx="4" fill="rgba(255,255,255,0.1)"  />
          <rect x="390" y="205" width="100" height="90"  rx="4" fill="rgba(255,255,255,0.1)"  />
          <rect x="215" y="335" width="160" height="90"  rx="4" fill="rgba(255,255,255,0.1)"  />
        </svg>

        {/* Pin */}
        <div className="map-pin-wrapper">
          <div className="map-pin" />
          <div className="map-pin-shadow" />
          <div className="map-label">Lumière Aesthetics — Makati</div>
        </div>
      </div>
    </section>
  );
}
