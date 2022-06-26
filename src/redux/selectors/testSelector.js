import { createSelector } from "@reduxjs/toolkit";

const getTests = (state) => {
  return state.tests.test;
};

const getTestType = (state) => {
  return state.tests.type;
};

const getAnswers = (state) => state.tests.answers;
const getIsLoading = (state) => state.tests.loading;
const getHasTest = (state) => Boolean(getTests(state).length);
const getHasAnswers = (state) => Boolean(getAnswers(state).length);

// const getCanSubmitAnswers = createSelector(
//   [getTests, getAnswers],
//   (tests, answers) => {
//     return tests.length === answers.length;
//   }
// );

export {
  getTests,
  getTestType,
  getIsLoading,
  getAnswers,
  getHasTest,
  getHasAnswers,
};
