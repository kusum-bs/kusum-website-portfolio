import React from "react";

const Modal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white max-w-2xl rounded-lg overflow-hidden shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-red-500 hover:text-red-700"
        >
          ✖
        </button>
        
        {/* Video Element */}
        <div className="p-4">
          <video
            className="w-full h-auto rounded-md"
            controls
            autoPlay
            src={videoSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
