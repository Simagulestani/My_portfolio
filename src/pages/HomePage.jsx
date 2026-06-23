import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Publications from "../components/Publications";
import { useScrollToHash } from "../hooks/useScrollToHash";

function HomePage() {
  useScrollToHash();

  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Publications />
    </>
  );
}

export default HomePage;
