import React, { useEffect, useState } from "react";
import Toast from "./Toast";

import "../styles/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [social, setSocial] = useState("");
  const [toast, setToast] = useState("");
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("contactForm");
      if (saved) {
        const data = JSON.parse(saved);
        setName(data.name || "");
        setEmail(data.email || "");
        setMessage(data.message || "");
        setSocial(data.social || "");
      }
    } catch (e) {
      console.warn("Could not restore draft:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "contactForm",
        JSON.stringify({ name, email, message, social })
      );
    } catch (e) {
      console.warn("Could not save draft:", e);
    }
  }, [name, email, message, social]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Please enter a valid email.");
      } else {
        setEmailError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setToast("✅ Message Sent Successfully!");
    try {
      localStorage.removeItem("contactForm");
    } catch (e) {
      console.warn("Could not clear draft:", e);
    }

    setName("");
    setEmail("");
    setMessage("");
    setSocial("");

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Let's connect and explore collaborations.</p>
      </div>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-invalid={errors.name ? "true" : "false"}
            />
          </label>
          {errors.name && (
            <small className="error" role="alert">
              {errors.name}
            </small>
          )}

          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={errors.email || emailError ? "true" : "false"}
            />
          </label>
          {errors.email && (
            <small className="error" role="alert">
              {errors.email}
            </small>
          )}
          {emailError && (
            <small className="error" role="alert">
              {emailError}
            </small>
          )}

          <label>
            <span>Message</span>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-invalid={errors.message ? "true" : "false"}
            />
          </label>
          {errors.message && (
            <small className="error" role="alert">
              {errors.message}
            </small>
          )}

          <label>
            <span>Social (optional)</span>
            <input
              type="text"
              placeholder="Link for social account"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Toast message={toast} />
    </section>
  );
}

export default Contact;