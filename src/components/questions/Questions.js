import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../../redux/actions/testAction";
import { getAnswers } from "../../redux/selectors/testSelector";
import styles from "./Questions.module.scss";

const Questions = ({ question, questionId, currentNumber, answers }) => {
  const dispatch = useDispatch();
  const checkedAnswers = useSelector(getAnswers);
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  const handleChange = ({ target }) => {
    setCheckedAnswer(target.value);
  };

  useEffect(() => {
    checkedAnswer && dispatch(addAnswer({ questionId, answer: checkedAnswer }));
    // eslint-disable-next-line
  }, [checkedAnswer]);

  useEffect(() => {
    const savedAnswer = checkedAnswers.find(
      (answer) => answer.questionId === questionId
    );
    console.log("savedAnswer :>> ", savedAnswer);
    setCheckedAnswer(savedAnswer ? savedAnswer.answer : null);
    // eslint-disable-next-line
  }, [questionId]);

  return (
    <div className={styles.question}>
      <div className={styles.wrap}>
        <p className={styles.answersNumber}>
          <span className={styles.answersNumberFirst}>{currentNumber}</span> /
          12
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
