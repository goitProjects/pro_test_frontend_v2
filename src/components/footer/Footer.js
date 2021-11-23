import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routers/routers";
import styles from "./Footer.module.scss";
import sprite from "../../sprites/sprite.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <span className={styles.infoUnit}>&copy; 2021</span>
        <span className={styles.infoUnit}>All Rights Reserved</span>
        <span className={styles.infoUnit}>
          Developed with{" "}
          <span className={styles.heartWrapper}>
            <svg className={styles.heart}>
              <use href={sprite + "#paintedHeart"} />
            </svg>
          </span>
        </span>
      </div>
      <p className={styles.author}>
        by{" "}
        <NavLink to={routes.contactsPage} className={styles.navLink}>
          GoIT Students
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
