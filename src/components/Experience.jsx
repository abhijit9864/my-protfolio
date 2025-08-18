
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="experience-container">
        <h2 className="text-center mb-5"><i className="bi bi-bag-check"></i>Experience</h2>
        <div className="experience-timeline">
          <div className="timeline-road"></div>

          <div className="timeline-item" ref={el => itemsRef.current[0] = el}>
            <div className="timeline-content">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Software Developer</h3>
              <div className="timeline-company">Ajatus Software</div>
              <p className="timeline-description">Currently working as a Software Developer, contributing to innovative software solutions.</p>
              <div className="timeline-date">Nov 2024 - Present</div>
            </div>
          </div>

          <div className="timeline-item" ref={el => itemsRef.current[1] = el}>
            <div className="timeline-content">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Full Stack Developer</h3>
              <div className="timeline-company">Web Bocket</div>
              <p className="timeline-description">Worked on full-stack development projects, implementing both frontend and backend solutions.</p>
              <div className="timeline-date">Sep 2023 - Nov 2023</div>
            </div>
          </div>

          <div className="timeline-item" ref={el => itemsRef.current[2] = el}>
            <div className="timeline-content">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">CPP Engineer</h3>
              <div className="timeline-company">National Aluminium</div>
              <p className="timeline-description">Summer internship focused on C++ engineering projects and applications.</p>
              <div className="timeline-date">June 2023 - July 2023</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
