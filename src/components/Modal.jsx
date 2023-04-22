import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <>
          <div
            className="fixed inset-0 z-0 bg-gray-200 opacity-75"
            onClick={onClose}
          ></div>
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-md p-4 mx-auto w-[95%] overflow-hidden md:w-auto rounded-md">
            {children}
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Modal;
