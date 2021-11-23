import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import routes from "../../../routers/routers";
import Diagram from "../../diagram/Diagram";
import catImages from "../../../img/catResultPage.png";
import { getTestType } from "../../../redux/selectors/testSelector";
import { resultsOperation } from "../../../redux/operations/resultsOperations";
import { getTestAnswers, getResultsOfTest } from "../../../redux/selectors/resultsSelector"

import styles from "./Results.module.scss";
import Loader from "../../loader/Loader";

class Results extends Component {
  state = {};

  componentDidMount() {
    const { testAnswers, typeOfTests, resultsOperation } = this.props;

    if (testAnswers && testAnswers.answers.length === 12) {
      resultsOperation(testAnswers, typeOfTests);
    }
  }

  componentDidUpdate(prevState, prevProps) {
    const results = this.props.results;

    if (results !== prevProps.results) {
      this.setState({ results });
    }
  }

  render() {
    const { testAnswers, results } = this.props;

    return testAnswers === null || testAnswers.answers.length < 12 ? (
      <Redirect to={routes.mainPage} />
    ) : results.answers ? (
      <Loader />
    ) : (
      <div className={styles.results}>
        <h2 className={styles.resultTitle}>Results</h2>
        <p className={styles.resultName}>
          {this.props.typeOfTests === "technical"
            ? `[ Testing technical_ ]`
            : `[ Testing theory_ ]`}
        </p>
        <Diagram percent={results.result} />
        <img className={styles.catImages} src={catImages} alt="cat"></img>
        <p className={styles.mainMessage}>{results.mainMessage}</p>
        <p className={styles.secondaryMessage}>{results.secondaryMessage}</p>
        <NavLink to={routes.test} className={styles.buttonText}>
          <button className={styles.button} type="button">
            Try again
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  testAnswers: getTestAnswers(state), // Масив ответов из сторе
  results: getResultsOfTest(state),
  typeOfTests: getTestType(state), //для определения какой запрос делать
});

const mapDispatchToProps = {
  resultsOperation: resultsOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
