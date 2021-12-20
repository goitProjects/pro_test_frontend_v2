import { createAction } from "@reduxjs/toolkit";

const test_Request = createAction("@test/_Request");
const test_Success = createAction("@test/_Success");
const test_Error = createAction("@test/_Error");

const addAnswersListRequest = createAction("results/addAnswersListRequest");
const addAnswersListSuccess = createAction("results/addAnswersListSuccess");
const addAnswersListError = createAction("results/addAnswersListError");

const addTestType = createAction("test/addTestType");
const addAnswer = createAction("test/addAnswer");
const resetTest = createAction("test/resetTest");

export {
  test_Request,
  test_Success,
  test_Error,
  addAnswersListRequest,
  addAnswersListSuccess,
  addAnswersListError,
  addAnswer,
  resetTest,
  addTestType,
};
