import "./About.css";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        <h2>About Me</h2>
        <p>Know more about me</p>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>Web Developer & Java Full Stack Developer</h3>

          <p>
            I'm Avishkar Tambe from Pune, Maharashtra. Currently,
            I'm working as a Web Developer Trainee at Walster
            Technology Pvt. Ltd.
          </p>

          <p>
            I develop responsive websites using React, HTML,
            CSS, JavaScript, WordPress and Elementor. I enjoy
            learning modern technologies and building scalable
            applications.
          </p>

        </div>

        <div className="about-cards">

          <div className="card">
            <FaUserGraduate className="icon"/>
            <h3>Education</h3>
            <p>B.Tech Computer Science & Engineering</p>
          </div>

          <div className="card">
            <FaLaptopCode className="icon"/>
            <h3>Experience</h3>
            <p>Web Developer Trainee at Walster Technology</p>
          </div>

          <div className="card">
            <FaCode className="icon"/>
            <h3>Career Goal</h3>
            <p>Build scalable Full Stack applications</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;