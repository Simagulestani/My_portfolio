import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (path, hash) => {
    navigate(path + (hash || ""));
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", to: "/", end: true },
    { label: "About", to: "/", hash: "#about" },
    { label: "Skills", to: "/", hash: "#skills" },
    { label: "Projects", to: "/", hash: "#projects" },
    { label: "Experience", to: "/", hash: "#experience" },
    { label: "Education", to: "/", hash: "#education" },
    { label: "Publications", to: "/", hash:"#publications"},
    { label: "Contact", to: "/", hash: "#contact" },
  ];

  return (
    <header className="navbar" role="banner">
      <NavLink to="/" className="logo" aria-label="Go to home page">
        <span className="logo-icon">SG</span>
        <span className="logo-text">Sima Gulestani</span>
      </NavLink>

      <button
        type="button"
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <nav id="main-navigation" role="navigation" aria-label="Main navigation">
        <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.hash ? (
                <a
                  href={`${item.to}${item.hash}`}
                  className="nav-link-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.to, item.hash);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="theme-btn"
        onClick={toggleTheme}
        aria-pressed={theme !== "light"}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>
    </header>
  );
}

export default Navbar;
