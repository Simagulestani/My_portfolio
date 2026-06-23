import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import TechBadge from "../components/TechBadge";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="page-not-found" style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="project-btn project-btn--primary" style={{ display: "inline-block", marginTop: 20 }}>
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="project-details-page" style={{ padding: "120px 24px 60px", maxWidth: 900, margin: "0 auto" }}>
      <Link to="/projects" style={{ color: "var(--accent)", fontWeight: 600, display: "inline-block", marginBottom: 24 }}>
        ← Back to Projects
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
        <div>
          {project.image ? (
            <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: 16, boxShadow: "var(--shadow)" }} />
          ) : (
            <div style={{ width: "100%", aspectRatio: "16/10", background: "var(--surface-soft)", borderRadius: 16, display: "grid", placeItems: "center", fontSize: "2rem", fontWeight: 700, color: "var(--text-muted)" }}>
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <h1 style={{ marginTop: 0 }}>{project.title}</h1>
          {project.status && (
            <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 600, background: project.status === "Completed" ? "#22c55e" : "#f59e0b", color: "#fff", marginBottom: 16 }}>
              {project.status}
            </span>
          )}

          <p style={{ lineHeight: 1.8, margin: "16px 0" }}>{project.details}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {project.technologies.map((tech, i) => (
              <TechBadge key={i} label={tech} variant="primary" />
            ))}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn project-btn--primary">
                View Project
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn project-btn--secondary">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsPage;
