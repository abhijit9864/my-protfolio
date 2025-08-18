import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";
import vssuatImage from "../assets/giet.jpg";
import schoolImage from "../assets/mtv.jpg";

const Education = () => (
  <section id="education" className="education-section">
    <div className="education-container">
      <h2 className="education-heading">
        <FaGraduationCap />
        My <span>Education</span>
      </h2>

      <div className="education-cards">
        <div className="education-card">
          {" "}
          <img
            src={vssuatImage}
            alt="GIET Campus"
            className="education-image"
          />{" "}
          <div className="education-details">
            <p className="degree">Bachlor Degree of Technology In Electrical and Computer Engineering</p>
            <h3 className="institution-name">Gandhi Institue For Education and Technology</h3>
            <p className="year">2020 – 2024</p>
          </div>
        </div>

        <div className="education-card">
          <img
            src={schoolImage}
            alt="MTV School Campus"
            className="education-image"
          />
          <div className="education-details">
            <p className="degree">Higher Secondary Education</p>
            <h3 className="institution-name">Sri Aurobindo Institute of Higher Studies and Research, Matrubhaban </h3>
            <p className="year">2018 – 2020</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
