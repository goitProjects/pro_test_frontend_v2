const getTestAnswers = (state) => {
  return state.tests.answers;
};

const getResultsOfTest = (state) => {
  return state.resultsOfTest.results;
};

export { getTestAnswers, getResultsOfTest };
