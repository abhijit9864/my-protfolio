import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Typed from "typed.js";
import profileImg from "../assets/home.png";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  const el = useRef(null);
  const [tiltClass, setTiltClass] = useState("");

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (y < height / 2) {
      if (x < width / 2) {
        setTiltClass("tilt-top tilt-left");
      } else {
        setTiltClass("tilt-top tilt-right");
      }
    } else {
      if (x < width / 2) {
        setTiltClass("tilt-bottom tilt-left");
      } else {
        setTiltClass("tilt-bottom tilt-right");
      }
    }
  };

  const handleMouseLeave = () => {
    setTiltClass("");
  };

  useEffect(() => {
    import("typed.js").then(({ default: Typed }) => {
      const typed = new Typed(el.current, {
        strings: ["Frontend Development", "Backend Development", "Web Design"],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
        showCursor: false,
      });

      return () => typed.destroy();
    });
  }, []);

  return (
    <section className="home-section">
      <ParticleBackground />
      <div className="content-container">
        <div className="text-content">
          <h1 className="main-heading">
            Hi There,
            <br />
            I'm Abhijit <strong className="highlight-name">Pradhan</strong>
          </h1>
          <p className="description">
            I Am Into <span ref={el} className="typing-text"></span>
          </p>{" "}
          <a href="#about" className="about-button">
            <i className="bi bi-person-fill"></i>
            About Me
          </a>
          <div className="social-icons">
            <a
              href="www.linkedin.com/in/abhijit-pradhan-512697246"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/abhijit9864"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://x.com/AbhijitPra24750"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="image-content">
          <div
            className={`profile-image-container ${tiltClass}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={profileImg} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
