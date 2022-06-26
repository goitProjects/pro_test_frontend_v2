import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import Questions from "../../questions/Questions";
import Loader from "../../loader/Loader";
import styles from "./Test.module.scss";
import {
  getHasAnswers,
  getIsLoading,
  getHasQuestions,
  getHasTest,
} from "../../../redux/selectors/testSelector";
import { getTest } from "../../../redux/operations/testOperations";
import { addTestType } from "../../../redux/actions/testAction";
import QustionsCardPaginator from "../../qustionsCardPaginator/QustionsCardPaginator";
import QuestionsCardHeader from "../../questionsCardHeader/QuestionsCardHeader";
import { useHistory } from "react-router-dom";

const Test = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    params: { testType },
  } = match;

  const isLoading = useSelector(getIsLoading);
  const hasTest = useSelector(getHasTest);

  const { question } = qs.parse(history.location.search);
  const questionNum = Number(question);

  useEffect(() => {
    if (!hasTest) {
      dispatch(getTest(testType));
      dispatch(addTestType(testType));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <QuestionsCardHeader testType={testType} />

        {hasTest && <Questions questionNum={questionNum} />}

        <QustionsCardPaginator questionNum={questionNum} />
      </div>
    </>
  );
};

export default Test;
