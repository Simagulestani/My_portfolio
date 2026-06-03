import React from "react";
import PropTypes from "prop-types";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img
          src={project?.image || "/assets/placeholder.png"}
          alt={project?.title || "Project image"}
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <div className="project-headline">
          <h3>{project?.title || "Untitled Project"}</h3>
          {project?.featured && (
            <span className="featured-badge">Featured</span>
          )}
        </div>

        <p className="project-description">
          {project?.description || "No description provided."}
        </p>

        <div className="tech-stack">
          {(project?.technologies ?? []).map((tech, index) => (
            <span key={`${tech}-${index}`} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project?.link ?? "#"} className="project-btn">
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

export default ProjectCard;