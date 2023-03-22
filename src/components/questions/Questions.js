import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAnswer } from "../../redux/actions/testAction";
import { getAnswers, getTests } from "../../redux/selectors/testSelector";
import styles from "./Questions.module.scss";
import { useTestQuestions } from "../../hooks/useTestQuestions";

const Questions = ({ questionNum }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const testData = useSelector(getTests);
  const checkedAnswers = useSelector(getAnswers);

  const { question, questionId, answers } = useTestQuestions(
    testData,
    questionNum
  );

  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const questionIdRef = useRef(null);

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

  useEffect(() => {
    history.push({ search: `question=${checkedAnswers.length + 1}` });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.question}>
      <div className={styles.wrap}>
        <p className={styles.answersNumber}>
          <span className={styles.answersNumberFirst}>{questionNum}</span> / 12
        </p>
        <section className={styles.answersList}>
          <h2 className={styles.questionTitle}>{question}?</h2>
          {answers.translate.map((translatedAnswers, idx) => (
            <div key={idx} className={styles.formRadio}>
              <input
                id={idx}
                type="radio"
                checked={answers.original[idx] === checkedAnswer}
                name="selectedAnswer"
                value={answers.original[idx]}
                onChange={handleChange}
              />
              <label htmlFor={idx}>{translatedAnswers}</label>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Questions;
