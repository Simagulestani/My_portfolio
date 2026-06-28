import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../styles/Home.css";
import heroImage from "../assets/Profile.png";
import resumePDF from "../assets/CV - Sima Gulestani (1).pdf";

function Home() {
  const user = useUser();

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img src={heroImage} alt={`Portrait of ${user.name}`} />
        </div>
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1>{user.name}</h1>
          <p className="hero-role">{user.role}</p>
          <p className="hero-headline">
            {user.tagline}
          </p>
          <p className="hero-description">
            A Full-Stack developer with hands-on experience in web development, specializing in React and modern JavaScript frameworks. I build fast, accessible, and creative applications that make a difference.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="hero-btn hero-btn-primary">
              View My Projects
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              Let&apos;s Connect
            </Link>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer"
               className="hero-btn hero-btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
