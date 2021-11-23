import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "../../questions/Questions";
import sprite from "../../../sprites/sprite.svg";
import styles from "./Test.module.scss";
import {
  getTestData,
  getTestType,
} from "../../../redux/selectors/testSelector";

class Test extends Component {
  state = {
    questionNumber: 0,
  };

  componentDidMount() {
    localStorage.setItem("answers", JSON.stringify([]));
  }

  handleFinishButtonClick = () => {
    this.props.history.push("/results");
  };

  handleQuestionNumberIncrease = () => {
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1,
    }));
  };

  handleQuestionNumberDecrease = () => {
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber - 1,
    }));
  };

  render() {
    const { testData } = this.props;
    const { questionNumber: idx } = this.state;

    return (
      <div className={styles.container}>
        <section className={styles["button-section"]}>
          {this.props.testType && (
            <h2 className={styles.header}>
              <div>[ Testing </div>
              <div>{this.props.testType}_ ]</div>
            </h2>
          )}
          <button
            className={styles["finish-button"]}
            onClick={this.handleFinishButtonClick}
            disabled={
              !JSON.parse(localStorage.getItem("answers")) ||
              JSON.parse(localStorage.getItem("answers")).length <
                testData.length - 2
            }
          >
            {!!this.props.testType ? "Finish test" : "Select question type"}
          </button>
        </section>
        {testData[idx] && (
          <Questions
            question={testData[idx].question}
            questionId={testData[idx].questionId}
            answers={testData[idx].answers}
            currentNumber={idx + 1}
          />
        )}
        <section className={styles["button-section"]}>
          <button
            className={styles["switch-button"]}
            onClick={this.handleQuestionNumberDecrease}
            disabled={idx === 0}
          >
            <svg
              className={`${styles["switch-button__svg"]} ${styles["rotate-arrow"]}`}
            >
              <use href={sprite + "#arrow"}></use>
            </svg>
            <span className={styles["switch-button__text"]}>
              Previous question
            </span>
          </button>
          <button
            className={styles["switch-button"]}
            onClick={this.handleQuestionNumberIncrease}
            disabled={idx === testData.length - 1}
          >
            <span
              className={`${styles["switch-button__text"]} ${styles["blacken-text"]}`}
            >
              Next question
            </span>
            <svg
              className={`${styles["switch-button__svg"]} ${styles["blacken-arrow"]}`}
            >
              <use href={sprite + "#arrow"}></use>
            </svg>
          </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  testData: getTestData(state),
  testType: getTestType(state),
});

export default connect(mapStateToProps)(Test);
