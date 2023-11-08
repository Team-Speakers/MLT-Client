import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CreateRoomModal from "./CreateRoomModal"; // 새로운 모달 파일 임포트
import SpeechPracticeModal from "./SpeechPracticeModal"; // 새로운 모달 파일 임포트

function Home() {
  const [roomCode, setRoomCode] = useState('');
  const [isCreateRoomModalOpen, setCreateRoomModalOpen] = useState(false);
  const [isSpeechPracticeModalOpen, setSpeechPracticeModalOpen] = useState(false);

  const handleRoomCreation = () => {
    setCreateRoomModalOpen(true);
  };

  const closeModal = () => {
    setCreateRoomModalOpen(false);
    setSpeechPracticeModalOpen(false);
  };

  const navigateToRoomCreation = () => {
    setCreateRoomModalOpen(true);
  };

  const navigateToSpeechPractice = () => {
    setSpeechPracticeModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.glue_grid}>
        <div className={`${styles["glue-grid__col"]} ${styles["glue-grid__col--span-8"]}`}>
          <p className={styles.greetings}>
          The distance is far away, <br />but the conversation is close <br />Let's get started
            
          </p>
        </div>
        <div className={`${styles["glue-grid__col"]} ${styles["glue-grid__col--span-4"]}`}>
          <div className={styles.input_field}>
            <input
              type="text"
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <button className={styles.button} onClick={handleRoomCreation}>GO</button>
          </div>
          <div>
            <ul className={styles.link_list}>
              <li>
                <button className={styles.buttonS} onClick={navigateToRoomCreation}>Create room</button>
              </li>
              <li>
                <button className={styles.buttonS} onClick={navigateToSpeechPractice}>Speaking practice</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CreateRoomModal isOpen={isCreateRoomModalOpen} closeModal={closeModal} />
      <SpeechPracticeModal isOpen={isSpeechPracticeModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default Home;
