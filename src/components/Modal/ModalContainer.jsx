import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Modal } from "@components/Modal";

import "./Modal.css";

const ModalContainer = ({ children, isActive }) => {
    return isActive
        ? ReactDOM.createPortal(
              <div className="modal__container">
                  <Modal.Shadow />
                  <div className="modal__context">{children}</div>
              </div>,
              document.getElementById("modal")
          )
        : null;
};

ModalContainer.propTypes = {
    children: PropTypes.element,
    isActive: PropTypes.bool
};

export default ModalContainer;
