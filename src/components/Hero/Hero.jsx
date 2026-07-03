import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="badge">🟢 Available for Work</span>

        <h3>Hello, I'm</h3>

        <h1>
          Avishkar <span>Tambe</span>
        </h1>

        <h2>Web Developer | Java Full Stack Developer</h2>

        <p>
          I'm a Web Developer Trainee at Walster Technology Pvt. Ltd.
          with hands-on experience in React, HTML, CSS, JavaScript,
          WordPress, and Elementor. I also have knowledge of Java,
          Spring Boot, Hibernate, MySQL, and REST APIs, and I'm
          passionate about building responsive and user-friendly web
          applications.
        </p>

        <div className="hero-buttons">

          <a
            href="/Avishkar_Resume.pdf"
            download
            className="btn primary"
          >
            Download Resume
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>
      </div>

      <div className="hero-image">
        <img src="/images/profile.jpg" alt="Avishkar Tambe" />
      </div>
    </section>
  );
}

export default Hero;