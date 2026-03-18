import { SERVICES } from "../data/index.js";
import { ServiceIcons } from "./Icons.jsx";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services-header section-header">
        <div>
          <div className="section-eyebrow">Our Expertise</div>
          <h2 className="section-title">
            Treatments Designed<br />for <em>You</em>
          </h2>
        </div>
        <p className="services-sub fade-up">
          Each treatment is carefully crafted to honour your natural features
          while delivering visible, lasting results.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const Icon = ServiceIcons[s.num];
          return (
            <div
              key={s.num}
              className={`service-card fade-up stagger-${Math.min(i + 1, 5)}`}
            >
              <span className="service-num">{s.num}</span>
              <Icon />
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#booking" className="service-link">
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
