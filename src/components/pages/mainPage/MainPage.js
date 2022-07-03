import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRestTest } from "../../../hooks/useRestTest";
import sprite from "../../../sprites/sprite.svg";
import styles from "./MainPage.module.scss";
import testTypes from "../../../options/testTypes";
import { contentLang } from "../../../options/langData";
import { getLangValue } from "../../../redux/selectors/langSelectors";

const { mainTitle, descr, titleNavigation } = contentLang.mainPage;

const MainPage = () => {
  useRestTest();

  const lang = useSelector(getLangValue);

  return (
    <div className={styles.container}>
      <blockquote className={styles.quote}>
        ”{mainTitle[lang][0]}{" "}
        <span className={styles.quote__span}>{mainTitle[lang][1]}”</span>
      </blockquote>
      <section className={styles.authorBox}>
        <div className={styles.authorBox__author}>{descr.author[lang]}</div>
        <div className={styles.authorBox__description}>{descr.text[lang]}</div>
      </section>
      <section className={styles["link-box"]}>
        <Link
          className={styles["link-box__theory"]}
          to={"/test/" + testTypes.THEORY + "?question=1"}
        >
          <span className={styles["link-box__text"]}>
            {titleNavigation.theory[lang]}
          </span>
          <span className={styles["link-box__link"]}>
            <svg className={styles["link-box__svg"]}>
              <use href={sprite + "#arrow"}></use>
            </svg>
          </span>
        </Link>
        <Link
          className={styles["link-box__technical"]}
          to={"/test/" + testTypes.TECH + "?question=1"}
        >
          <span className={styles["link-box__text"]}>
            {titleNavigation.tech[lang]}
          </span>
          <span className={styles["link-box__link"]}>
            <svg className={styles["link-box__svg"]}>
              <use href={sprite + "#arrow"}></use>
            </svg>
          </span>
        </Link>
      </section>
    </div>
  );
};

export default MainPage;
