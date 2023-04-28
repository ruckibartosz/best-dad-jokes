import PropTypes from "prop-types";

import "./Modal.css";

const ModalBody = ({ children }) => {
    return <div className="modal__body">{children}</div>;
};

ModalBody.propTypes = {
    children: PropTypes.element
};

export default ModalBody;
