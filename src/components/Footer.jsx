import { useState } from "react";
import {
  FOOTER_TREATMENTS,
  FOOTER_CLINIC_LINKS,
} from "../data/index.js";
import { InstagramIcon, FacebookIcon, TikTokIcon, ArrowRight } from "./Icons.jsx";

const SOCIAL = [
  { title: "Instagram", Icon: InstagramIcon },
  { title: "Facebook",  Icon: FacebookIcon  },
  { title: "TikTok",    Icon: TikTokIcon    },
];

export default function Footer() {
  const [email,     setEmail]     = useState("");
  const [subDone,   setSubDone]   = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubDone(true);
    setEmail("");
    setTimeout(() => setSubDone(false), 4000);
  };

  return (
    <footer>
      <div className="footer-top">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="nav-logo"
            style={{ display: "block", marginBottom: 20, color: "white" }}
          >
            Lumière<span> Aesthetics</span>
          </a>
          <p className="footer-desc">
            Where science meets artistry. Delivering bespoke aesthetic
            treatments with the highest standards of safety, efficacy, and
            elegance since 2015.
          </p>
          <div className="footer-social">
            {SOCIAL.map(({ title, Icon }) => (
              <a href="#" className="social-btn" title={title} key={title}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div>
          <div className="footer-col-title">Treatments</div>
          <div className="footer-links">
            {FOOTER_TREATMENTS.map((t) => (
              <a href="#services" key={t}>{t}</a>
            ))}
          </div>
        </div>

        {/* Clinic */}
        <div>
          <div className="footer-col-title">Clinic</div>
          <div className="footer-links">
            {FOOTER_CLINIC_LINKS.map(({ href, label }) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div className="footer-col-title">Newsletter</div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Get skincare tips and exclusive offers delivered to your inbox.
          </p>
          {subDone ? (
            <p style={{ fontSize: "0.82rem", color: "var(--gold-light)" }}>
              ✓ You're subscribed — thank you!
            </p>
          ) : (
            <div style={{ display: "flex" }}>
              <input
                className="newsletter-input"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className="newsletter-btn" onClick={handleSubscribe}>
                <ArrowRight color="white" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} Lumière Aesthetics. All rights reserved.
        </div>
        <div className="footer-legal">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <a href="#" key={l}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
