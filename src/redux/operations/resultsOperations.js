import {
  resultsRequest,
  resultsSuccess,
  resultsError,
} from "../actions/resultsAction";
import { postTechResults, postTheoryResults } from "../../servises/reqToApi";

const resultsOperation = (tests, typeOfTest) => async (dispatch) => {
  dispatch(resultsRequest());

  if (typeOfTest === "technical") {
    try {
      const results = await postTechResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(resultsError(error));
    }
  } else {
    try {
      const results = await postTheoryResults(tests);
      dispatch(resultsSuccess(results));
    } catch (error) {
      dispatch(resultsError(error));
    }
  } 
};

export { resultsOperation };
