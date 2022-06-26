import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAnswer, resetTest } from "../../redux/actions/testAction";
import { getAnswers, getTests } from "../../redux/selectors/testSelector";
import styles from "./Questions.module.scss";

const Questions = ({ questionNum, setQuestionNum }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const testData = useSelector(getTests);
  const checkedAnswers = useSelector(getAnswers);

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const questionIdRef = useRef(null);

  const { question, questionId, answers } = testData[questionNum - 1];

  const savedAnswer = checkedAnswers?.find(
    (answer) => answer.questionId === questionId
  );
  const isCurQuestion = questionId === questionIdRef.current;

  const handleChange = ({ target }) => {
    setCheckedAnswer(target.value);
  };

  useEffect(() => {
    if (!isCurQuestion) {
      questionIdRef.current = questionId;
    } else {
      checkedAnswer &&
        dispatch(addAnswer({ questionId, answer: checkedAnswer }));
    }
    // eslint-disable-next-line
  }, [checkedAnswer]);

  useEffect(() => {
    const canSwowResult = checkedAnswers.length === testData.length;
    if (!canSwowResult && savedAnswer && isCurQuestion) {
      // checkedAnswer.length > 0 && setQuestionNum((prev) => prev + 1);
      checkedAnswers.length > 0 &&
        history.push({ search: `question=${questionNum + 1}` });
    }
    canSwowResult && history.push("/results");
    // eslint-disable-next-line
  }, [checkedAnswers]);

  useEffect(() => {
    !savedAnswer
      ? setCheckedAnswer(null)
      : setCheckedAnswer(savedAnswer.answer);
    // eslint-disable-next-line
  }, [questionId]);

  return (
    <div className={styles.question}>
      <div className={styles.wrap}>
        <p className={styles.answersNumber}>
          <span className={styles.answersNumberFirst}>{questionNum}</span> / 12
        </p>
        <section className={styles.answersList}>
          <h2 className={styles.questionTitle}>{question}?</h2>
          {answers.map((answer, idx) => (
            <div key={idx} className={styles.formRadio}>
              <input
                id={idx}
                type="radio"
                checked={answer === checkedAnswer}
                name="selectedAnswer"
                value={answer}
                onChange={handleChange}
              />
              <label htmlFor={idx}>{answer}</label>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Questions;
