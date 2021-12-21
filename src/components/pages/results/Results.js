import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// import routes from "../../../routers/routers";
import Diagram from "../../diagram/Diagram";
import catImages from "../../../img/catResultPage.png";
import { getTestType } from "../../../redux/selectors/testSelector";
import { resultsOperation } from "../../../redux/operations/resultsOperations";
import {
  getTestAnswers,
  getResultsOfTest,
} from "../../../redux/selectors/resultsSelector";
import { resetTest } from "../../../redux/actions/testAction";
import { resetResults } from "../../../redux/actions/resultsAction";

import styles from "./Results.module.scss";
import Loader from "../../loader/Loader";

class Results extends Component {
  state = { results: null };

  componentDidMount() {
    const { testAnswers, typeOfTests, results, resultsOperation } = this.props;

    if (testAnswers && testAnswers.length === 12) {
      resultsOperation(testAnswers, typeOfTests);
    }
    results.answers === null &&
      testAnswers.length === 0 &&
      this.props.history.push("/");
  }

  componentDidUpdate(_, prevProps) {
    const { results, testAnswers, typeOfTests, resetTest } = this.props;

    if (results !== prevProps.results) {
      this.setState({ results });
      testAnswers.length && typeOfTests && resetTest();
    }
  }

  componentWillUnmount() {
    const { resetResults } = this.props;
    resetResults();
  }

  render() {
    const { results } = this.props;

    return (
      // testAnswers === null || testAnswers.length < 12 ? (
      //   <Redirect to={routes.mainPage} />
      // ) :
      results.answers ? (
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
          <NavLink to={"/"} className={styles.buttonText}>
            <button className={styles.button} type="button">
              Try again
            </button>
          </NavLink>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  testAnswers: getTestAnswers(state), // Масив ответов из сторе
  results: getResultsOfTest(state),
  typeOfTests: getTestType(state), //для определения какой запрос делать
});

const mapDispatchToProps = {
  resultsOperation,
  resetTest,
  resetResults,
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
