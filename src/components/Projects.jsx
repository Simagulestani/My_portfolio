import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

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
        <Link to="/projects" className="view-all-btn">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}

export default Projects;