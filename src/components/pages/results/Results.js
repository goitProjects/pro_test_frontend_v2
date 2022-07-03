import React, { Component } from "react";
import { connect } from "react-redux";

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
import { contentLang } from "../../../options/langData";
import { getLangValue } from "../../../redux/selectors/langSelectors";

const { title, descr, result, resultDescr, btnTitle, totalTestDescr } =
  contentLang.resultPage;

const createPropName = (value) =>
  value?.trim().toLowerCase().split(" ").join("_") || undefined;

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
    const { results } = this.props;

    if (results !== prevProps.results) {
      this.setState({ results });
    }
  }

  componentWillUnmount() {
    const { resetResults, resetTest } = this.props;
    resetResults();
    resetTest();
  }

  render() {
    const { results, lang } = this.props;

    const mainMessagePropName = createPropName(results.mainMessage);

    const mainMessage =
      totalTestDescr[mainMessagePropName]?.title[lang] ||
      totalTestDescr["not_bad!"].title[lang];
    const secondaryMessage =
      totalTestDescr[mainMessagePropName]?.text[lang] ||
      totalTestDescr["not_bad!"].text[lang];

    return (
      // testAnswers === null || testAnswers.length < 12 ? (
      //   <Redirect to={routes.mainPage} />
      // ) :
      results.answers ? (
        <Loader />
      ) : (
        <div className={styles.results}>
          <h2 className={styles.resultTitle}>{title[lang]}</h2>
          <p className={styles.resultName}>
            {this.props.typeOfTests === "technical"
              ? `[ ${descr.tech[lang]}_ ]`
              : `[ ${descr.theory[lang]}_ ]`}
          </p>
          <Diagram
            percent={results.result}
            lang={lang}
            result={result}
            resultDescr={resultDescr}
          />
          <img className={styles.catImages} src={catImages} alt="cat"></img>
          <p className={styles.mainMessage}>{mainMessage}</p>
          <p className={styles.secondaryMessage}>{secondaryMessage}</p>
          {/* <NavLink to={this.props.location} className={styles.buttonText}> */}
          <button className={styles.button} type="button">
            {btnTitle[lang]}
          </button>
          {/* </NavLink> */}
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  testAnswers: getTestAnswers(state), // Масив ответов из сторе
  results: getResultsOfTest(state),
  typeOfTests: getTestType(state), //для определения какой запрос делать
  lang: getLangValue(state),
});

const mapDispatchToProps = {
  resultsOperation,
  resetTest,
  resetResults,
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
