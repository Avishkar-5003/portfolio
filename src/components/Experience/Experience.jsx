import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <h2>Experience</h2>
        <p>My Professional Journey</p>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="date">2025 - Present</span>

            <h3>Web Developer Trainee</h3>

            <h4>Walstar Technologies Pvt. Ltd.</h4>

            <p>
              Working on responsive web applications using HTML, CSS,
              JavaScript, React.js and WordPress. Developing reusable
              UI components and improving user experience.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="date">2024</span>

            <h3>Java Full Stack Development Training</h3>

            <h4>Self Learning & Projects</h4>

            <p>
              Learned Core Java, Advanced Java, Spring Boot,
              React.js, REST APIs and MySQL by building
              real-world projects.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;