import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { getUserGoogle } from "../../../redux/operations/authOperations";
import sprite from "../../../sprites/sprite.svg";
import styles from "./MainPage.module.scss";
import { test } from "../../../redux/operations/testOperations";

class MainPage extends Component {
  componentDidMount() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    const keysArray = Object.keys(params);

    if (keysArray.length > 0) {
      this.props.onGetUserGoogle(params);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <blockquote className={styles.quote}>
          “Regression testing. What is it?{" "}
          <span className={styles.quote__span}>
            If the system compiles, that's good, if it boots, that's great!”
          </span>
        </blockquote>
        <section className={styles.authorBox}>
          <div className={styles.authorBox__author}>Linus Torvalds</div>
          <div className={styles.authorBox__description}>
            Linux kernel creator, hacker, 1969
          </div>
        </section>
        <section className={styles["link-box"]}>
          <Link
            className={styles["link-box__technical"]}
            to="/test"
            onClick={() => this.props.onTestDataGetting("technical")}
          >
            <span className={styles["link-box__text"]}>
              QA technical training
            </span>
            <span className={styles["link-box__link"]}>
              <svg className={styles["link-box__svg"]}>
                <use href={sprite + "#arrow"}></use>
              </svg>
            </span>
          </Link>
          <Link
            className={styles["link-box__theory"]}
            to="/test"
            onClick={() => this.props.onTestDataGetting("theory")}
          >
            <span className={styles["link-box__text"]}>Testing theory</span>
            <span className={styles["link-box__link"]}>
              <svg className={styles["link-box__svg"]}>
                <use href={sprite + "#arrow"}></use>
              </svg>
            </span>
          </Link>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetUserGoogle: getUserGoogle,
  onTestDataGetting: test,
};

export default connect(null, mapDispatchToProps)(MainPage);
