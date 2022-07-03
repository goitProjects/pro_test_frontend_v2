import { GET_TEST_SUCCESS } from "../actions/testAction";
import {
  qaTechUk as technical,
  qaTheoryUk as theory,
} from "../../options/langData";

const test = { technical, theory };

export const changeTesyByLang = (store) => (next) => (action) => {
  if (action.type === GET_TEST_SUCCESS) {
    const { value: lang } = store.getState().lang;
    if (lang === "uk") {
      const { data, type } = action.payload;
      const newData = data.map((el) => test[type][el.questionId]);
      action.payload.data = newData;
    }
  }
  next(action);
};
