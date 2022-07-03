import styles from "./QuestionsCardHeader.module.scss";

const QuestionsCardHeader = ({ testType, headerContent, lang }) => {
  return (
    <section className={styles["button-section"]}>
      {testType && (
        <h2 className={styles.title}>
          <div>[ {headerContent.title[lang][0]} </div>
          <div>{headerContent.title[lang][1][testType]}_ ]</div>
        </h2>
      )}
      <button className={styles["finish-button"]}>
        {!!testType ? headerContent.btnFinish[lang] : "Select question type"}
      </button>
    </section>
  );
};

export default QuestionsCardHeader;
