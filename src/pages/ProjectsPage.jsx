import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filterTech, setFilterTech] = useState("");

  const allTechs = [...new Set(projects.flatMap((p) => p.technologies))].sort();

  const filtered = projects.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchTech =
      !filterTech || p.technologies.includes(filterTech);
    return matchSearch && matchTech;
  });

  return (
    <section id="projects" className="projects" style={{ paddingTop: 120 }}>
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Showcasing impactful projects and technical achievements.</p>
      </div>

      <div className="projects-controls" style={{ maxWidth: 1200, margin: "0 auto 32px", padding: "0 24px", display: "flex", gap: 16, flexWrap: "wrap" }}>
        <input
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200 }}
          aria-label="Search projects"
        />
        <select
          value={filterTech}
          onChange={(e) => setFilterTech(e.target.value)}
          aria-label="Filter by technology"
          style={{ minWidth: 160 }}
        >
          <option value="">All Technologies</option>
          {allTechs.map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", padding: 60, color: "var(--text-muted)" }}>
          No projects match your criteria.
        </p>
      ) : (
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;
