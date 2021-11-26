import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

import { authReducer } from "./reducers/authReducer";
import { resultsReducer } from "./reducers/resultsReducer";
import { testReducer } from "./reducers/testReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "sid", "refreshToken"],
};

const answersPersistConfig = {
  key: "qa",
  storage,
  whitelist: ["answers", "test"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  resultsOfTest: resultsReducer,
  tests: persistReducer(answersPersistConfig, testReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
