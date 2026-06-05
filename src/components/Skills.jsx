import skills from "../data/skills";
import SkillCard from "./SkillCard";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;