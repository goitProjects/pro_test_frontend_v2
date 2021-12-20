const getTestAnswers = (state) => {
  console.log('state.tests :>> ', state.tests);
  return state.tests.answers;
};

const getResultsOfTest = (state) => {
  return state.resultsOfTest.results;
};

export { getTestAnswers, getResultsOfTest };
