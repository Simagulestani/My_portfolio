import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
      }
    } catch (e) {
      // ignore
    }
    return "light";
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }

    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
      document.body.dataset.theme = theme;
      document.body.classList.toggle("dark", theme === "dark");
      document.body.classList.toggle("light", theme === "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme} data-theme={theme}>
      <ScrollProgress />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <section id="publications" className="publications">
          <div className="section-heading">
            <h2>Publications</h2>
            <p>Research papers and articles authored by Sima.</p>
          </div>

          <div className="publications-grid">
            <article className="publication-card">
              <span className="publication-label">Publication</span>
              <h3>Two Years After Afghanistan’s Fall</h3>
              <p>
               What Was Life Like Under The Taliban Rule?​ 3rd Ed.
              </p>
              <a href="https://aptyouth.org/two-years-after-afghanistans-fall-what-was-life-like-under-the-taliban-rule-3rd-ed/" className="publication-btn">
                View publication
              </a>
            </article>

          </div>
        </section>

       

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;