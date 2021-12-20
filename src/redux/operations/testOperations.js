import { test_Request, test_Success, test_Error } from "../actions/testAction";
import { getTestData } from "../../servises/reqToApi";
import { errorHandler } from "./errorHandlerOperation";

const getTest = (type) => async (dispatch) => {
  dispatch(test_Request());

  try {
    const testData = await getTestData(type);
    dispatch(test_Success({ data: testData, type }));
  } catch (error) {
    dispatch(
      errorHandler({
        error,
        errAction: test_Error,
        cb: () => getTest(type),
      })
    );
  }
};

export { getTest };
