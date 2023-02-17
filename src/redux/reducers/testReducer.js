import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addAnswersListRequest,
  addAnswersListSuccess,
  addAnswersListError,
  addAnswer,
  test_Request,
  test_Success,
  test_Error,
  resetTest,
  // addTestType,
} from "../actions/testAction";

import { logOutSuccess } from "../actions/authAction";

const test = createReducer([], {
  [test_Success]: (_, { payload }) => payload.data,
  [resetTest]: () => [],
  [logOutSuccess]: () => [],
});

const type = createReducer(null, {
  [resetTest]: () => null,
  // [addTestType]: (_, { payload }) => payload,
  [logOutSuccess]: () => null,
});

const answers = createReducer([], {
  [addAnswersListSuccess]: (_, { payload }) => payload,
  [addAnswer]: (state, { payload }) => {
    const hasAlreadyAnswer = state.some(
      ({ questionId }) => questionId === payload.questionId
    );
    return hasAlreadyAnswer
      ? state.map((answer) =>
          answer.questionId === payload.questionId ? payload : answer
        )
      : [...state, payload];
  },
  [resetTest]: () => [],
  [logOutSuccess]: () => [],
});

const loading = createReducer(false, {
  [test_Request]: () => true,
  [test_Success]: () => false,
  [test_Error]: () => false,
  [addAnswersListRequest]: () => true,
  [addAnswersListSuccess]: () => false,
  [addAnswersListError]: () => false,
  [resetTest]: () => false,
  [logOutSuccess]: () => false,
});

const error = createReducer(null, {
  [test_Error]: (_, { payload }) => payload,
  [addAnswersListError]: (_, { payload }) => payload,
  [resetTest]: () => null,
  [logOutSuccess]: () => null,
});

const testReducer = combineReducers({
  test,
  answers,
  type,
  loading,
  error,
});

export { testReducer };
