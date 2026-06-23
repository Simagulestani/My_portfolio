import PropTypes from "prop-types";

function LivePreview({ name = "", email = "", message = "", social = "" }) {
  return (
    <div className="preview-card">
      <h3>👀 Live Preview</h3>

      <p>
        <strong>Name:</strong> {name || "Your Name"}
      </p>

      <p>
        <strong>Email:</strong> {email || "your@email.com"}
      </p>

      <p>
        <strong>Social:</strong> {social || "Link for social account"}
      </p>

      <div className="preview-message">
        <strong>Message:</strong>
        <div className="preview-text">
          {message || "Your message preview will appear here..."}
        </div>
      </div>
    </div>
  );
}

LivePreview.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  social: PropTypes.string
};

export default LivePreview;