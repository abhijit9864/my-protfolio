import './Skills.css';

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-container">
      <h2 className="skills-title">
        <i className="bi bi-pc-display"></i>
        Skills & <span>Abilities</span>
      </h2>

      {/* Frontend */}
      <div className="skill-category">
        <h3><i className="bi bi-window-desktop"></i>Frontend</h3>
        <div className="skill-row">
          <span><i className="bi bi-filetype-html"></i>HTML5</span>
          <span><i className="bi bi-filetype-css"></i>CSS3</span>
          <span><i className="bi bi-filetype-js"></i>JavaScript</span>
          <span><i className="bi bi-react"></i>React.js</span>
          <span><i className="bi bi-bootstrap"></i>Bootstrap</span>
          <span><i className="bi bi-wind"></i>Tailwind</span>
        </div>
      </div>

      {/* Backend */}
      <div className="skill-category">
        <h3><i className="bi bi-server"></i>Backend</h3>
        <div className="skill-row">
          <span><i className="bi bi-nodejs"></i>Node.js</span>
          <span><i className="bi bi-diagram-3"></i>Express.js</span>
          <span><i className="bi bi-cloud-arrow-up-down"></i>REST API</span>
          <span><i className="bi bi-box"></i>Strapi</span>
          <span><i className="bi bi-shield-lock"></i>Auth</span>
        </div>
      </div>

      {/* Database */}
      <div className="skill-category">
        <h3><i className="bi bi-database"></i>Database</h3>
        <div className="skill-row">
          <span><i className="bi bi-database-fill"></i>MySQL</span>
          <span><i className="bi bi-file-earmark-code"></i>SQL</span>
          <span><i className="bi bi-database-check"></i>PostgreSQL</span>
        </div>
      </div>

      {/* Tools */}
      <div className="skill-category">
        <h3><i className="bi bi-tools"></i>Tools & DevOps</h3>
        <div className="skill-row">
          <span><i className="bi bi-git"></i>Git</span>
          <span><i className="bi bi-github"></i>GitHub</span>
          <span><i className="bi bi-code-square"></i>VS Code</span>
          <span><i className="bi bi-send"></i>Postman</span>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="skill-category">
        <h3><i className="bi bi-code-slash"></i>Programming Languages</h3>
        <div className="skill-row">
          <span><i className="bi bi-filetype-java"></i>Java</span>
          <span><i className="bi bi-filetype-py"></i>Python</span>
          <span><i className="bi bi-filetype-cs"></i>C#</span>
          <span><i className="bi bi-filetype-js"></i>JavaScript</span>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
