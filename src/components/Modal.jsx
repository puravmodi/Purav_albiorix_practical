import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <>
          <div className="fixed inset-0 z-0 bg-red-200" onClick={onClose}></div>
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-md z-1 px-8 py-4">
            {children}
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Modal;
