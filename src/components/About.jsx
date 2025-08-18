import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <h2 className="about-title">
         <i className="bi bi-person-fill"></i>
         About <span>Me</span></h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImg} alt="Abhijit" />
        </div>
        <div className="about-text">
          <h3>I'm Abhijit</h3>
          <h4>Fullstack Developer</h4>
          <p>
            I am a passionate fullstack developer with expertise in building modern web applications.
            My journey in web development has equipped me with a strong foundation in both frontend
            and backend technologies. I strive to create efficient, scalable, and user-friendly
            solutions that make a positive impact.
          </p>
          <div className="contact-info">
            <p><i className="bi bi-envelope-fill"></i>Email: abhijit@example.com</p>
            <p><i className="bi bi-geo-alt-fill"></i>Adress: Odisha, India</p>
          </div>
          <a href="/resume.pdf" download className="resume-button">
            <i className="bi bi-file-earmark-text-fill"></i> Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
