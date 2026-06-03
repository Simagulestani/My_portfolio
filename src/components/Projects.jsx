import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Showcasing impactful projects and technical achievements.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects-footer">
        <button type="button" className="view-all-btn">
          View All
        </button>
      </div>
    </section>
  );
}

export default Projects;