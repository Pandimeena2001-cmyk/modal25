import React, { useState } from "react";
import "./App.css";

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <h1>Modal Opener</h1>

      <button
        className="open-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Open Dialog
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Hello 👋</h2>
            <p>This is your popup modal dialog.</p>

            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;