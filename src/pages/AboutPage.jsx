import Experience from "../components/Experience";
import Education from "../components/Education";
import Publications from "../components/Publications";
import { useScrollToHash } from "../hooks/useScrollToHash";

function AboutPage() {
  useScrollToHash();

  return (
    <>
      <Experience />
      <Education />
      <Publications />
    </>
  );
}

export default AboutPage;
