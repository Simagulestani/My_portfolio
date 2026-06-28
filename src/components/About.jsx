import { useUser } from "../context/UserContext";
import "../styles/about.css";

function About() {
  const user = useUser();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-heading">
          <h2>About Me</h2>
          <p>My journey, philosophy, and what drives me as a developer.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Hi, I&apos;m {user.name}!</h3>
            <p>
              I&apos;m a Full-Stack Developer passionate about building fast, accessible, and
              creative web applications. My journey into tech started with a curiosity for how
              websites work — and has grown into a dedicated pursuit of mastering modern
              frontend and backend technologies.
            </p>
            <p>
              Currently pursuing a Bachelor&apos;s in Business Administration at the American
              University of Afghanistan, I combine technical skills with business acumen to
              build solutions that are both functional and impactful.
            </p>
            <div className="about-philosophy">
              <h4>My Philosophy</h4>
              <p>
                I believe great software is built at the intersection of thoughtful design,
                clean code, and empathy for the user. Every project is an opportunity to learn,
                improve, and create something meaningful.
              </p>
            </div>
            <div className="about-highlights">
              <div className="about-highlight">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Goal-Oriented</h4>
                  <p>Focused on delivering measurable results through clean, efficient code.</p>
                </div>
              </div>
              <div className="about-highlight">
                <span className="highlight-icon">🌱</span>
                <div>
                  <h4>Continuous Learner</h4>
                  <p>Always exploring new technologies and best practices to stay current.</p>
                </div>
              </div>
              <div className="about-highlight">
                <span className="highlight-icon">🤝</span>
                <div>
                  <h4>Collaborative</h4>
                  <p>Strong believer in teamwork, open communication, and shared success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
