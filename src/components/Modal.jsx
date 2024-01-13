import React from "react";

const Modal = ({ children, handleClose }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center backdrop-blur-md z-[999] backdrop-brightness-75 px-4">
      <div className="w-full max-w-[800px] p-6 bg-white relative">
        <button className="absolute right-2 top-2" onClick={handleClose}>
          <i className="ri-close-line" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
