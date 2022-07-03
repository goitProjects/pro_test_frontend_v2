import { configureStore } from "@reduxjs/toolkit";
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
import langReducer from "./slices/langSlice";
import { changeTesyByLang } from "./middlewares/changeTestByLang";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "sid", "refreshToken"],
};

const answersPersistConfig = {
  key: "qa",
  storage,
  whitelist: ["answers", "test", "type"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  resultsOfTest: resultsReducer,
  tests: persistReducer(answersPersistConfig, testReducer),
  lang: langReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(changeTesyByLang),
});

const persistor = persistStore(store);

export { store, persistor };
