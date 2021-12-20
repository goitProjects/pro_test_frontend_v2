import { createSelector } from "@reduxjs/toolkit";

const getTests = (state) => {
  return state.tests.test;
};

const getTestType = (state) => {
  return state.tests.type;
};

const getIsLoading = (state) => state.tests.loading;
const getAnswers = (state) => state.tests.answers;

const getCanSubmitAnswers = createSelector(
  [getTests, getAnswers],
  (tests, answers) => {
    return tests.length === answers.length;
  }
);

export { getTests, getTestType, getIsLoading, getAnswers, getCanSubmitAnswers };
