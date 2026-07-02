import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rhh9i9",
        "template_kvdklos",
        form.current,
        "EMF0JHk8Y5wdIrMBJ"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Let's connect and build something amazing.</p>
      </div>

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            Feel free to contact me for internships,
            jobs or freelance projects.
          </p>

          <div className="info">
            <FaEnvelope className="contact-icon"/>
            <span>tambeavishkar1@gmail.com</span>
          </div>

          <div className="info">
            <FaPhoneAlt className="contact-icon"/>
            <span>+91 8896054646</span>
          </div>

          <div className="info">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Pune, Maharashtra</span>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/Avishkar-5003"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/avishkar5003"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;