import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Questions from "../../questions/Questions";
import Loader from "../../loader/Loader";
import sprite from "../../../sprites/sprite.svg";
import styles from "./Test.module.scss";
import {
  getAnswers,
  getIsLoading,
  getTests,
  getCanSubmitAnswers,
} from "../../../redux/selectors/testSelector";
import { getTest } from "../../../redux/operations/testOperations";
import { addTestType } from "../../../redux/actions/testAction";

const Test = ({ history, match }) => {
  const dispatch = useDispatch();
  const {
    params: { testType },
  } = match;

  const testData = useSelector(getTests);
  const hasAnswers = !!useSelector(getAnswers).length;
  const isLoading = useSelector(getIsLoading);
  const canSubmitAnswers = useSelector(getCanSubmitAnswers);

  const [questionNum, setQuestionNum] = useState(0);

  const curTest = testData[questionNum];
  const curNum = questionNum + 1;

  const handleFinishButtonClick = () => {
    history.push("/results");
  };

  const handleChangeQuestionNum = (e) => {
    const { action } = e.currentTarget.dataset;
    setQuestionNum((prev) => (action === "increase" ? prev + 1 : prev - 1));
  };

  useEffect(() => {
    !hasAnswers && dispatch(getTest(testType));
    dispatch(addTestType(testType));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <section className={styles["button-section"]}>
          {testType && (
            <h2 className={styles.header}>
              <div>[ Testing </div>
              <div>{testType}_ ]</div>
            </h2>
          )}
          <button
            className={styles["finish-button"]}
            onClick={handleFinishButtonClick}
            disabled={!canSubmitAnswers}
          >
            {!!testType ? "Finish test" : "Select question type"}
          </button>
        </section>
        {curTest && <Questions currentNumber={curNum} {...curTest} />}
        <section className={styles["button-section"]}>
          <button
            className={styles["switch-button"]}
            onClick={handleChangeQuestionNum}
            disabled={questionNum === 0}
            data-action="decrease"
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
            onClick={handleChangeQuestionNum}
            disabled={questionNum === testData.length - 1}
            data-action="increase"
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
    </>
  );
};

export default Test;
