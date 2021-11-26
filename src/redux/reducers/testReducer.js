import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  _Request,
  _Success,
  _Error,
  addAnswersListRequest,
  addAnswersListSuccess,
  addAnswersListError,
  addAnswer,
} from "../actions/testAction";

const test = createReducer(
  {},
  {
    [_Success]: (_, { payload }) => payload.data,
  }
);

const type = createReducer(null, {
  [_Success]: (_, { payload }) => payload.type,
});

const loading = createReducer(null, {
  [_Request]: () => true,
  [_Success]: () => false,
  [_Error]: () => false,
  [addAnswersListRequest]: () => true,
  [addAnswersListSuccess]: () => false,
  [addAnswersListError]: () => false,
});

const error = createReducer(null, {
  [_Error]: (_, { payload }) => payload,
  [addAnswersListError]: (_, { payload }) => payload,
});

const answers = createReducer([], {
  [addAnswersListSuccess]: (_, { payload }) => payload,
  [addAnswer]: (state, { payload }) => [...state, payload],
});

const testReducer = combineReducers({
  test,
  answers,
  type,
  loading,
  error,
});

export { testReducer };
