import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  resultsRequest,
  resultsSuccess,
  resultsError,
} from "../actions/resultsAction";

const initialUserState = {
  answers: null,
};

const results = createReducer(
  { ...initialUserState },
  {
    [resultsSuccess]: (_, { payload }) => payload,
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
