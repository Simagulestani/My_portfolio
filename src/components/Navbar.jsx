import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./../styles/Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (path, hash) => {
    navigate(path + (hash || ""));
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" aria-label="Go to home">
        Sima Gulestani
      </NavLink>

      <nav role="navigation" aria-label="Main navigation">
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => (isActive && !location.hash ? "active" : "")}>Home</NavLink></li>
          <li>
            <a
              href="/#skills"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#skills"); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#projects"); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#experience"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#experience"); }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/#education"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#education"); }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="/#publications"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#publications"); }}
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="nav-link-btn"
              onClick={(e) => { e.preventDefault(); scrollToSection("/", "#contact"); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="theme-btn"
        onClick={toggleTheme}
        aria-pressed={theme !== "light"}
        aria-label="Toggle color theme"
        title="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Navbar;
