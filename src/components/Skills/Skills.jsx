import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiBootstrap,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <FaJava className="skill-icon java" />
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <SiSpringboot className="skill-icon spring" />
          <h3>Spring Boot</h3>
        </div>

        <div className="skill-card">
          <SiMysql className="skill-icon mysql" />
          <h3>MySQL</h3>
        </div>

        <div className="skill-card">
          <SiBootstrap className="skill-icon bootstrap" />
          <h3>Bootstrap</h3>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="skill-icon github" />
          <h3>GitHub</h3>
        </div>

        <div className="skill-card">
          <SiPostman className="skill-icon postman" />
          <h3>Postman</h3>
        </div>

      </div>

    </section>
  );
}

export default Skills;