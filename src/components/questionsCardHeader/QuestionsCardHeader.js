import styles from "./QuestionsCardHeader.module.scss";

const QuestionsCardHeader = ({ testType }) => {
  return (
    <section className={styles["button-section"]}>
      {testType && (
        <h2 className={styles.title}>
          <div>[ Testing </div>
          <div>{testType}_ ]</div>
        </h2>
      )}
      <button className={styles["finish-button"]}>
        {!!testType ? "Finish test" : "Select question type"}
      </button>
    </section>
  );
};

export default QuestionsCardHeader;
