import React, { Component } from "react";
import { connect } from "react-redux";

import { answersListOperation } from "../../redux/operations/testOperations";
import styles from "./Questions.module.scss";

class Questions extends Component {
  state = {
    selectedAnswer: null,
    answers: [],
  };

  componentDidUpdate(prevProps) {
    this.props.answersListOperation({ answers: this.state.answers });

    if (this.props.question !== prevProps.question) {
      this.setState({ selectedAnswer: null });
      // eslint-disable-next-line
      this.state.answers.map((answ) => {
        if (this.props.questionId === answ.questionId) {
          this.setState({ selectedAnswer: answ.answer });
        }
      });

      localStorage.setItem("answers", JSON.stringify(this.state.answers));
    }
  }

  addList = (questionId, value) => {
    const currentAnswer = {
      questionId: questionId,
      answer: value,
    };

    this.setState((prevState) => ({
      answers: [
        ...prevState.answers.filter((item) => item.questionId !== questionId),
        currentAnswer,
      ],
    }));
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const { questionId } = this.props;

    this.setState({ [name]: type === "checkbox" ? checked : value });

    this.addList(questionId, value);
  };

  render() {
    const { selectedAnswer } = this.state;
    const { question, answers, currentNumber } = this.props;

    return (
      <div className={styles.question}>
        <div className={styles.wrap}>
          <p className={styles.answersNumber}>
            <span className={styles.answersNumberFirst}>{currentNumber}</span> /
            12
          </p>
          <section className={styles.answersList}>
            <h2 className={styles.questionTitle}>{question}?</h2>
            {answers.map((answer) => (
              <div key={answer} className={styles.formRadio}>
                <input
                  id={answer}
                  type="radio"
                  checked={selectedAnswer === answer}
                  name="selectedAnswer"
                  value={answer}
                  onChange={this.handleChange}
                />
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  answersListOperation: answersListOperation,
};

export default connect(null, mapDispatchToProps)(Questions);
