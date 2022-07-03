import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "query-string";
import Questions from "../../questions/Questions";
import Loader from "../../loader/Loader";
import styles from "./Test.module.scss";
import {
  getIsLoading,
  getHasTest,
} from "../../../redux/selectors/testSelector";
import { getTest } from "../../../redux/operations/testOperations";
import { addTestType } from "../../../redux/actions/testAction";
import QustionsCardPaginator from "../../qustionsCardPaginator/QustionsCardPaginator";
import QuestionsCardHeader from "../../questionsCardHeader/QuestionsCardHeader";
import { contentLang } from "../../../options/langData";
import { getLangValue } from "../../../redux/selectors/langSelectors";

const { btnsPaginator: btnsPaginatorContent, header: headerContent } =
  contentLang.testPage;

const Test = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    params: { testType },
  } = match;

  const isLoading = useSelector(getIsLoading);
  const hasTest = useSelector(getHasTest);
  const lang = useSelector(getLangValue);

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
        <QuestionsCardHeader
          testType={testType}
          headerContent={headerContent}
          lang={lang}
        />

        {hasTest && <Questions questionNum={questionNum} />}

        <QustionsCardPaginator
          questionNum={questionNum}
          lang={lang}
          btnsPaginatorContent={btnsPaginatorContent}
        />
      </div>
    </>
  );
};

export default Test;
