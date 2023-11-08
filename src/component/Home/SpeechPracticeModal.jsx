// SpeechPracticeModal.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function SpeechPracticeModal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.modal} ${styles.speechPracticeStyle}`}>
      <div className={styles.modalContent}>
        <h2>Speaking practice</h2>
        {/* 스피치 연습 모달 내용을 추가하세요. */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

SpeechPracticeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SpeechPracticeModal;
