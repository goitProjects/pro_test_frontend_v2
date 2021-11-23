import {
  _Request,
  _Success,
  _Error,
  addAnswersListRequest,
  addAnswersListSuccess,
  addAnswersListError,
} from "../actions/testAction";
import { getTestData } from "../../servises/reqToApi";

const test = (type) => async (dispatch) => {
  dispatch(_Request());

  try {
    const testData = await getTestData(type);
    dispatch(_Success({ data: testData.data, type }));
  } catch (error) {
    dispatch(_Error(error));
  }
};

const answersListOperation = (answers) => async (dispatch) => {
  dispatch(addAnswersListRequest());

  try {
    dispatch(addAnswersListSuccess(answers));
  } catch (error) {
    dispatch(addAnswersListError(error));
  }
};

export { test, answersListOperation };
