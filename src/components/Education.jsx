import React from "react";
import "../styles/education.css";
import auafLogo from "../assets/auaf.png";
import llcLogo from "../assets/llc.png";

const educationItems = [
  {
    title: "Bachelor of Business Administration",
    institution: "American University of Afghanistan",
    location: "Kabul, Afghanistan",
    period: "2022 - Present",
    description:
      "Pursuing a degree in Business Administration with a focus on Management, Developed knowledge in business management, entrepreneurship, leadership, marketing, and organizational behavior.",
    tags: ["Management", "Entrepreneurship", "Leadership"],
    logo: auafLogo
  },
  {
    title: "English Language Program Graduate",
    institution: "Lincoln Learning Center, Mazar-e-Sharif | 2020",
    location: "Balkh, Afghanistan",
    period: "2019 - 2022",
    description:
      "Lincoln Learning Center in Mazar-e-Sharif (Mazar) was an American Spaces facility supported by the U.S. Embassy in Afghanistan. I Successfully completed an intensive English language program, strengthened communication, academic writing, and presentation skills, improved proficiency in English for academic and professional environments.",
    tags: ["English", "Communication", "Academic Writing", "Youth Empowerment"],
    logo: llcLogo
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-heading">
        <h2>Education</h2>
        <p>Educational background and academic achievements.</p>
      </div>

      <div className="education-grid">
        {educationItems.map((item) => (
          <article key={item.title} className="education-card">
            <div className="education-card-top">
              <img src={item.logo} alt={`${item.institution} logo`} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </div>
            </div>

            <span className="education-period">{item.period}</span>

            <p className="education-description">{item.description}</p>

            <div className="education-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="education-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;