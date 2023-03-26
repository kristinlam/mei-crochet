import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-beige opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
