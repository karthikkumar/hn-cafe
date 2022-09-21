import { createPortal } from "react-dom";
import { Color } from "../utils/css-vars";

function Modal({ children, onClose }) {
  return createPortal(
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        backgroundColor: Color.blueLite,
      }}
      onClick={onClose}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
