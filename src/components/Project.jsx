import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import ecommerce from "../assets/ecommerce.jpg";
import wheather from "../assets/wheather.jpg";
import task from "../assets/task.png";
import chat from "../assets/chat.png";
import movie from "../assets/movie.png";
import protfolio from "../assets/protfolio.jpg";
import recipe from "../assets/recipe.png";
import fitness from "../assets/fitness.png";
import blog from "../assets/blog.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform built with React and Node.js",
      image: ecommerce,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using Weather API",
      image: wheather,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A beautiful task management application with drag-and-drop",
      image: task,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Real-time chat app with WebSocket integration",
      image: chat,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 5,
      title: "Movie Database",
      description: "Movie information portal using TMDB API",
      image: movie,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React",
      image: protfolio,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 7,
      title: "Recipe Finder",
      description: "Find and save your favorite recipes",
      image: recipe,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 8,
      title: "Fitness Tracker",
      description: "Track your workouts and fitness progress",
      image: fitness,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      id: 9,
      title: "Blog Platform",
      description: "Full-featured blogging platform with CMS",
      image: blog,
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>
          <FaGithub className="projects-icon" /> Projects <span>Made</span> Made
        </h1>
        <p>Here are some of my recent projects</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLinkExternal /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
