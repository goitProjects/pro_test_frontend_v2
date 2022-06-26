import React, { useState } from "react";
import { useRestTest } from "../../../hooks/useRestTest";
import styles from "./UsefulInfo.module.scss";

const materialsType = {
  LITERATURE: "literature",
  RESOURCES: "resources",
  JOBS: "jobs",
};

const UsefulInfo = () => {
  useRestTest();

  const [isMoreLinkResorces, setIsMoreLinkResorces] = useState(false);
  const [isMoreLinkLiterature] = useState(false);

  const handleOpenMore = (e) => {
    e.preventDefault();
    const {
      dataset: { moreType },
    } = e.target;
    switch (moreType) {
      case materialsType.RESOURCES:
        setIsMoreLinkResorces((prev) => !prev);
        return;
      case materialsType.LITERATURE:
        return;
      default:
        return;
    }
  };

  return (
    <section className={styles.usefulInfo}>
      <div className={styles["container"]}>
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
            {isMoreLinkResorces && (
              <>
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
              </>
            )}
            <li className={styles["sources-item"]}>
              <a
                href="https://www.facebook.com/QA"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
                data-more-type={materialsType.RESOURCES}
                onClick={handleOpenMore}
              >
                {isMoreLinkResorces ? "Back" : "More..."}
              </a>
            </li>
          </ol>
        </div>

        <div className={styles["usefulInfo-sources"]}>
          <p className={styles["sections-name"]}>Useful literature</p>
          <hr />
          <ol className={styles["sources-list"]}>
            <li className={styles["sources-item"]}> Testing dot.com Savin</li>
            <li className={styles["sources-item"]}>
              A mental hospital in the hands of patients.
            </li>
            <li className={styles["sources-item"]}>Scrum. J. Sutherland.</li>
            <li className={styles["sources-item"]}>
              <a
                href="https://"
                target="_blank"
                rel="noreferrer"
                className={styles["sources-item--link"]}
                data-more-type={materialsType.LITERATURE}
                onClick={handleOpenMore}
              >
                {isMoreLinkLiterature ? "Back" : "More..."}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfo;
