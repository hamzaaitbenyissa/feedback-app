import PropTypes from "prop-types";
function Header({ text, bgColor, textColor }) {
  const headerstyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerstyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "rgb(255, 89, 33)",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
