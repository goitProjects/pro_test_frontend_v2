import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  resultsRequest,
  resultsSuccess,
  resultsError,
  resetResults,
} from "../actions/resultsAction";

const initialUserState = {
  answers: null,
};

const results = createReducer(
  { ...initialUserState },
  {
    [resultsSuccess]: (_, { payload }) => payload,
    [resetResults]: () => initialUserState,
  }
);

const error = createReducer(null, {
  [resultsError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [resultsRequest]: () => true,
  [resultsSuccess]: () => false,
  [resultsError]: () => false,
});

const resultsReducer = combineReducers({
  results,
  error,
  loading,
});

export { resultsReducer };
