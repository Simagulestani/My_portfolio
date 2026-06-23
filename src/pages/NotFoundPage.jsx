import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section
      className="not-found-page"
      style={{
        textAlign: "center",
        padding: "160px 24px",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0, lineHeight: 1, color: "var(--accent)" }}>
        404
      </h1>
      <p style={{ fontSize: "1.25rem", margin: "16px 0 32px", color: "var(--text-muted)" }}>
        Page not found — the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="project-btn project-btn--primary"
        style={{ display: "inline-block" }}
      >
        Go Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
