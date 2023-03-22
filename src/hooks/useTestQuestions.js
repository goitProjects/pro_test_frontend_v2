import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLangValue } from "./useLang";
import * as langOptions from "../options/langData";
import { langValuesOptions as options } from "../options/langValuesOptions";
import testTypes from "../options/testTypes";
const toUpperCaseFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const useTestQuestions = (testQuestions, questionNum) => {
  const { testType } = useParams();
  const lang = useLangValue();

  const testMap = useMemo(() => {
    const tests =
      lang === options.EN.name
        ? testQuestions
        : testType === testTypes.THEORY
        ? langOptions["qaTheory" + toUpperCaseFirstLetter(lang)]
        : testType === testTypes.TECH
        ? langOptions["qaTech" + toUpperCaseFirstLetter(lang)]
        : [];
    return tests.reduce((acc, el) => {
      acc[el.questionId] = el;
      return acc;
    }, {});
  }, [testType, lang, testQuestions]);

  const answersWithLangOptionsMap = useMemo(() => {
    return testQuestions.reduce((acc, el) => {
      acc[el.questionId] = {
        original: el.answers,
        translate: testMap[el.questionId].answers,
      };

      return acc;
    }, {});
  }, [testQuestions, testMap]);

  const testQuestionId = testQuestions[questionNum - 1].questionId;

  if (testQuestionId) {
    return {
      ...testMap[testQuestionId],
      answers: answersWithLangOptionsMap[testQuestionId],
    };
  }
  return {};
};
