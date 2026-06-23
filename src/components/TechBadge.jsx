import PropTypes from "prop-types";

function TechBadge({ label, variant = "default" }) {
  return <span className={`tech-badge tech-badge--${variant}`}>{label}</span>;
}

TechBadge.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "outline"])
};

export default TechBadge;
