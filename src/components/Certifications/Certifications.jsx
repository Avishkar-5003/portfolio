import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="section-title">
        <h2>Certifications</h2>
        <p>Professional Courses & Certifications</p>
      </div>

      <div className="certification-container">

        <div className="certificate-card">
          <FaCertificate className="certificate-icon"/>

          <h3>Java Full Stack Development</h3>

          <h4>Kiran Academy</h4>

          <span>Completed in 2025</span>

          <p>
            Completed professional training in Java, Advanced Java,
            Spring Boot, Hibernate, React, MySQL, REST API,
            HTML, CSS and JavaScript.
          </p>

        </div>

        <div className="certificate-card">

          <FaCertificate className="certificate-icon"/>

          <h3>Oracle Database Language</h3>

          <h4>Triplet Services</h4>

          <span>Completed in 2023</span>

          <p>
            Learned Oracle SQL, database design,
            queries, joins, normalization,
            stored procedures and database management.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Certifications;