import "../styles/SkillCard.css";

function SkillCard({ skill }) {
  const {
    name = "Untitled Skill",
    level = "Advanced",
    icon: Icon,
    details = ""
  } = skill || {};

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="skill-star">
      ★
    </span>
  ));

  return (
    <article className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          {Icon && <Icon />}
        </div>

        <div className="skill-info">
          <h3>{name}</h3>
          <p className="skill-level">{level}</p>
        </div>
      </div>

      <p className="skill-details">{details}</p>

      <div className="skill-rating">
        {stars}
      </div>
    </article>
  );
}



export default SkillCard;