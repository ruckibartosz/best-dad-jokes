import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ onClick, text, icon, className, ...props }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} {...props}>
            {text}
            {icon}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string
};

export default Button;
