import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../redux/actions/testAction";
import styles from "./Questions.module.scss";

const Questions = ({ question, questionId, answers, currentNumber }) => {
  const dispatch = useDispatch();

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleChange = ({ target }) => setSelectedAnswer(target.value);

  useEffect(() => {
    selectedAnswer &&
      dispatch(addAnswer({ questionId, answer: selectedAnswer }));
  }, [selectedAnswer]);

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
                onChange={handleChange}
              />
              <label htmlFor={answer}>{answer}</label>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Questions;
