import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/index.js";

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className="nav"
        style={{ boxShadow: scrolled ? "0 4px 30px rgba(61,43,35,0.08)" : "none" }}
      >
        <a href="#home" className="nav-logo">
          Lumière<span> Aesthetics</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#booking" className="nav-cta">Book Now</a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMobile}>
              {l.label}
            </a>
          ))}
          <a href="#booking" className="mobile-cta" onClick={closeMobile}>
            Book Now
          </a>
        </div>
      )}
    </>
  );
}
