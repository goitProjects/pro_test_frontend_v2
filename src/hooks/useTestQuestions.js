import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLangValue } from "./useLang";
import * as langOptions from "../options/langData";
import testTypes from "../options/testTypes";

const toUpperCaseFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const useTestQuestions = (testQuestions, questionNum) => {
  const { testType } = useParams();
  const lang = useLangValue();

  // console.log("langOptions :>> ", langOptions["qaTheoryUk"]);

  const testMap = useMemo(() => {
    const tests =
      testType === testTypes.THEORY
        ? langOptions["qaTheory" + toUpperCaseFirstLetter(lang)]
        : testType === testTypes.TECH
        ? langOptions["qaTech" + toUpperCaseFirstLetter(lang)]
        : [];
    // console.log("tests :>> ", tests);
    return tests.reduce((acc, el) => {
      acc[el.questionId] = el;
      return acc;
    }, {});
  }, [testType, lang]);

  const testQuestionId = testQuestions[questionNum - 1].questionId;

  return testQuestionId ? testMap[testQuestionId] : {};
};
