import React from "react";
import styles from "./UsefulInfo.module.scss";

const UsefulInfo = () => {
  return (
    <section className={styles.usefulInfo}>
      <div className={styles["container"]}>
        <div className={styles["usefulInfo-sources"]}>
          <p className={styles["sections-name"]}>Useful literature</p>
          <hr />
          <ol className={styles["sources-list"]}>
            <li className={styles["sources-item"]}> Testing dot.com Savin</li>
            <li className={styles["sources-item"]}>
              A mental hospital in the hands of patients.
            </li>
            <li className={styles["sources-item"]}>Scrum. J. Sutherland.</li>
          </ol>
        </div>
        <div className={styles["usefulInfo-sources"]}>
          <p className={styles["sections-name"]}>Useful resources</p>
          <hr />
          <ol className={styles["sources-list"]}>
            <li className={styles["sources-item"]}>
              <a
                href="https://dou.ua/"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
              >
                dou.ua
              </a>
            </li>
            <li className={styles["sources-item"]}>
              <a
                href="https://habr.com/"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
              >
                Habr
              </a>
            </li>
            <li className={styles["sources-item"]}>
              <a
                href="https://www.facebook.com/QA"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
              >
                facebook.com/QA
              </a>
            </li>
            <li className={styles["sources-item"]}>
              <a
                href="https://goit.ua/"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
              >
                goit.ua
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfo;
