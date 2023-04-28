import PropTypes from "prop-types";

import "./Modal.css";

const ModalHeader = ({ children }) => {
    return <div className="modal__header">{children}</div>;
};

ModalHeader.propTypes = {
    children: PropTypes.element
};

export default ModalHeader;
