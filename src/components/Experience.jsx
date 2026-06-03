import React from "react";
import "../styles/Experience.css";

const experienceItems = [
  {
    title: "U-Reporter",
    company: "UNICEF Mazar-Afghanistan | Nov 2022 – Jan 2023",
    location: "Balkh, Mazar-e-Sharif",
    period: "2022 - 2023",
    description:
      "Participated in youth engagement and community awareness initiatives, collected feedback and insights from young people on social issues, contributed to communication and advocacy activities."
  },
  {
    title: "English instructor",
    company: "Center of Business Administration (CBA)",
    location: "Remote",
    period: "2023 - 2024",
    description:
    "Taught English language skills to students of different proficiency levels, designed and delivered engaging lessons to improve communication skills, assessed student progress and provided constructive feedback.",
  },
  {
    title: "Researcher",
    company: "Afghans for Progressive Thinking (APT) | Jan 2023 – Apr 2023",
    location: "Remote",
    period: "Four Months",
    description:
      "Conducted research on social and educational topics, collected, analyzed, and documented research findings, collaborated with team members on project development and reporting.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <h2>Experience</h2>
        <p>Professional journey and career timeline.</p>
      </div>

      <div className="experience-grid">
        {experienceItems.map((item) => (
          <article key={item.title} className="experience-card">
              <div>
                <h3>{item.title}</h3>
                <p className="experience-company">{item.company}</p>
              </div>
            

            <p className="experience-location">{item.location}</p>

            <span className="experience-period">{item.period}</span>

            <p className="experience-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;