import PropTypes from "prop-types";

function Button({ children, version , type, isDisabled}) {
  return <button type={type} disabled={isDisabled} children={children}className={`btn btn-${version}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled : PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;