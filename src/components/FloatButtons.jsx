import { WhatsAppIcon, ChatIcon } from "./Icons.jsx";

export default function FloatButtons() {
  return (
    <div className="float-btns">
      {/* WhatsApp */}
      <a
        href="https://wa.me/639170000000"
        className="float-btn float-wa"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="float-tooltip">WhatsApp Us</span>
        <WhatsAppIcon />
      </a>

      {/* Book Now */}
      <a
        href="#booking"
        className="float-btn float-msg"
        aria-label="Book an appointment"
      >
        <span className="float-tooltip">Book Now</span>
        <ChatIcon />
      </a>
    </div>
  );
}
