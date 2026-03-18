import { useState } from "react";
import { BOOKING_SERVICES } from "../data/index.js";
import { StarIcon } from "./Icons.jsx";

const INITIAL_FORM = {
  firstName: "",
  lastName:  "",
  email:     "",
  phone:     "",
  date:      "",
  service:   "",
};

export default function Booking() {
  const [form,      setForm]      = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="booking" id="booking">
      {/* ── Left: intro ── */}
      <div>
        <div className="booking-eyebrow">Reserve Your Visit</div>
        <h2 className="booking-title">
          Begin Your<br /><em>Transformation</em><br />Today
        </h2>
        <p className="booking-desc">
          Our team will confirm your appointment within 2 hours and send you a
          personalised pre-treatment guide.
        </p>

        <div className="booking-guarantee">
          <div className="bg-icon">
            <StarIcon />
          </div>
          <div className="bg-text">
            <strong>Free Consultation Included</strong>
            Every new client receives a complimentary 30-minute assessment with
            our physician.
          </div>
        </div>
      </div>

      {/* ── Right: form ── */}
      <div className="booking-form-box fade-up">
        <div className="form-title">Book an Appointment</div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              placeholder="Isabella"
              value={form.firstName}
              onChange={update("firstName")}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              placeholder="Chen"
              value={form.lastName}
              onChange={update("lastName")}
            />
          </div>
        </div>

        <div className="form-row full">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="hello@example.com"
              value={form.email}
              onChange={update("email")}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              placeholder="+63 917 000 0000"
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Date</label>
            <input
              className="form-input"
              type="date"
              value={form.date}
              onChange={update("date")}
            />
          </div>
        </div>

        <div className="form-row full">
          <div className="form-group">
            <label className="form-label">Service of Interest</label>
            <select
              className="form-select"
              value={form.service}
              onChange={update("service")}
            >
              <option value="">Select a treatment…</option>
              {BOOKING_SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn-book" onClick={handleSubmit}>
          {submitted ? "✓ Request Received!" : "Request Appointment"}
        </button>
        <p className="form-note">🔒 Your information is private and never shared.</p>
      </div>
    </section>
  );
}
