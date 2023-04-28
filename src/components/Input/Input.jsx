import PropTypes from "prop-types";

import "./Input.css";

const Input = ({ type, placeholder, setter, val = "" }) => {
    return (
        <input
            className="input"
            value={val}
            type={type}
            placeholder={placeholder}
            onChange={setter}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    setter: PropTypes.func,
    val: PropTypes.any
};

export default Input;
