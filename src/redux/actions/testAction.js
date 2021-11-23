import { createAction } from "@reduxjs/toolkit";

const _Request = createAction("@test/_Request");
const _Success = createAction("@test/_Success");
const _Error = createAction("@test/_Error");

const addAnswersListRequest = createAction("results/addAnswersListRequest");
const addAnswersListSuccess = createAction("results/addAnswersListSuccess");
const addAnswersListError = createAction("results/addAnswersListError");

export {
  _Error,
  _Success,
  _Request,
  addAnswersListRequest,
  addAnswersListSuccess,
  addAnswersListError,
};
