import PropTypes from "prop-types";

import "./Modal.css";

const ModalFooter = ({ children }) => {
    return <div className="modal__footer">{children}</div>;
};

ModalFooter.propTypes = {
    children: PropTypes.element
};

export default ModalFooter;
