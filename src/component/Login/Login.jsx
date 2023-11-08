import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {

  return (
    <div className={styles.container}>
        <div className={styles.glue_grid}>
      <div className={`${styles["glue-grid__col"]} ${styles["glue-grid__col--span-8"]}`}>
        <p className={styles.greetings}>
          The distance is far away, but the conversation is close <br />Let's get started
        </p>
      </div>
      <div className={`${styles["glue-grid__col"]} ${styles["glue-grid__col--span-4"]}`}>
        <div>
          <ul className={styles.link_list}>
            <li>
              <Link to="/login" className={styles.button}>Login</Link>
            </li>
            <li>
              <Link to="/membership" className={styles.button}>join membership</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
