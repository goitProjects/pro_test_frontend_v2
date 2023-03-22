import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAnswers } from "../../redux/selectors/testSelector";
import testTypes from "../../options/testTypes";
import styles from "./QustionsCardPaginator.module.scss";
import sprite from "../../sprites/sprite.svg";

const QustionsCardPaginator = ({ questionNum, lang, btnsPaginatorContent }) => {
  const history = useHistory();
  const { testType } = useParams();

  const answersQuantity = useSelector(getAnswers).length;
  const canPushNextBtn =
    (questionNum < answersQuantity && questionNum === 1) ||
    questionNum < answersQuantity + 1;

  const handleChangeQuestionNum = (e) => {
    const { action } = e.currentTarget.dataset;
    if (testType === testTypes.TECH) return;
    history.push({
      ...history.location,
      search: `question=${
        action === "increase" ? questionNum + 1 : questionNum - 1
      }`,
    });
  };

  return (
    <section className={styles["button-section"]}>
      <button
        className={styles["switch-button"]}
        onClick={handleChangeQuestionNum}
        disabled={questionNum === 1}
        data-action="decrease"
      >
        <svg
          className={`${styles["switch-button__svg"]} ${styles["rotate-arrow"]}`}
        >
          <use href={sprite + "#arrow"}></use>
        </svg>
        <span className={styles["switch-button__text"]}>
          {btnsPaginatorContent.prev[lang]}
        </span>
      </button>
      <button
        className={styles["switch-button"]}
        onClick={handleChangeQuestionNum}
        disabled={!canPushNextBtn}
        data-action="increase"
      >
        <span
          className={`${styles["switch-button__text"]} ${styles["blacken-text"]}`}
        >
          {btnsPaginatorContent.next[lang]}
        </span>
        <svg
          className={`${styles["switch-button__svg"]} ${styles["blacken-arrow"]}`}
        >
          <use href={sprite + "#arrow"}></use>
        </svg>
      </button>
    </section>
  );
};

export default QustionsCardPaginator;
