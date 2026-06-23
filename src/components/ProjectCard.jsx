import { useState } from "react";
import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(project.id);

  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const statusColors = {
    Completed: "#22c55e",
    "In Progress": "#f59e0b",
    Featured: "#8b5cf6"
  };

  return (
    <article className={`project-card ${expanded ? "project-card--expanded" : ""}`}>
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <div className="project-fallback">{initials}</div>
        )}
        {project.status && (
          <span
            className="project-status-badge"
            style={{ background: statusColors[project.status] || "#64748b" }}
          >
            {project.status}
          </span>
        )}
        <button
          className="favorite-btn"
          onClick={(e) => { e.preventDefault(); toggleFavorite(project.id); }}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={favorite}
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="project-content">
        <div className="project-headline">
          <h3>{project.title}</h3>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <TechBadge key={`${tech}-${index}`} label={tech} />
          ))}
        </div>

        {project.progress !== undefined && (
          <div className="project-progress">
            <span className="progress-label">
              {project.progress}% complete
            </span>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={project.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        <button
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "▲ Less Info" : "▼ More Info"}
        </button>

        {expanded && (
          <div className="project-details-expanded">
            <p>{project.details}</p>
          </div>
        )}

        <div className="project-actions">
          <Link to={`/projects/${project.id}`} className="project-btn project-btn--primary">
            View Project
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--secondary"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
