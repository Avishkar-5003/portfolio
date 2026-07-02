import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <h2>My Projects</h2>
        <p>Here are some projects I've worked on.</p>
      </div>

      <div className="project-container">

        {/* Hostel Hub */}

        <div className="project-card">

          <img
            src="/images/hostelhub.png"
            alt="Hostel Hub"
          />

          <div className="project-content">

            <h3>Hostel Hub</h3>

            <span className="duration">July 2025</span>

            <p>
              Developed a comprehensive Hostel Management application
              for students and wardens with secure authentication,
              role-based access, room booking, meal plan booking,
              leave requests, feedback, complaints, and efficient
              hostel data management.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>

          </div>

        </div>

        {/* Hospital Management */}

        <div className="project-card">

          <img
            src="/images/hospital.png"
            alt="Hospital Management"
          />

          <div className="project-content">

            <h3>Hospital Management System</h3>

            <span className="duration">March 2024</span>

            <p>
              Developed a Hospital Management System with patient
              registration, doctor scheduling, appointments,
              billing, medical records, REST APIs, role-based
              authentication, and MySQL database integration.
            </p>

            <div className="tech-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>

          </div>

        </div>

        {/* Portfolio */}

        <div className="project-card">

          <img
            src="/images/portfolio.png"
            alt="Portfolio"
          />

          <div className="project-content">

            <h3>Personal Portfolio</h3>

            <span className="duration">2026</span>

            <p>
              A modern and responsive personal portfolio built using
              React, showcasing my projects, technical skills,
              experience, and contact information with a clean UI.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="project-buttons">
              <a
                href="https://github.com/Avishkar-5003"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://github.com/Avishkar-5003"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;