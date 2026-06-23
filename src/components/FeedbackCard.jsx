import PropTypes from "prop-types";
import "../styles/FeedbackCard.css";

function FeedbackCard({ name, role, text, rating }) {
  return (
    <article className="feedback-card">
      <div className="feedback-header">
        <div className="feedback-avatar">{name.charAt(0)}</div>
        <div>
          <h4>{name}</h4>
          <span className="feedback-role">{role}</span>
        </div>
      </div>
      <p className="feedback-text">"{text}"</p>
      {rating && (
        <div className="feedback-rating" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
              ★
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default FeedbackCard;
