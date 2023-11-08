// CreateRoomModal.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function CreateRoomModal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.modal} ${styles.createRoomStyle}`}>
      <div className={styles.modalContent}>
        <h2>Create room</h2>
        <input type="text" placeholder="Enter room name" /><br/>
        <button onClick={closeModal}>Close</button>
        <button>GO</button>
      </div>
    </div>
  );
}

CreateRoomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateRoomModal;
