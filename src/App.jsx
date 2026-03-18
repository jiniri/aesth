import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Divider from "./components/Divider";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatButtons from "./components/FloatButtons";

export default function App() {
  // Intersection Observer — fade-up on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Divider />
        <About />
        <Gallery />
        <Divider />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatButtons />
    </>
  );
}
