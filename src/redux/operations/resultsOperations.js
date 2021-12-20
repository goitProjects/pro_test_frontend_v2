import {
  resultsRequest,
  resultsSuccess,
  resultsError,
} from "../actions/resultsAction";
import { postTechResults, postTheoryResults } from "../../servises/reqToApi";
import { errorHandler } from "./errorHandlerOperation";

const resultsOperation = (tests, typeOfTest) => async (dispatch) => {
  dispatch(resultsRequest());

  if (typeOfTest === "technical") {
    try {
      const results = await postTechResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(
        errorHandler({
          error,
          cb: () => resultsOperation(tests, typeOfTest),
          errAction: resultsError,
        })
      );
    }
  } else {
    try {
      const results = await postTheoryResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(
        errorHandler({
          error,
          cb: () => resultsOperation(tests, typeOfTest),
          errAction: resultsError,
        })
      );
    }
  }
};

export { resultsOperation };
