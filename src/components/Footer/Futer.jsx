import "./Futer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Avishkar Tambe</h2>

        <p>
          Web Developer | Java Full Stack Developer
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

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

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © 2026 Avishkar Tambe. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;