import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./../../images/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hcontainer}>
        <div className={styles.logo}>
          <Link className="link" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link className={`link ${styles.login_link}`} to="/login">
              Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;