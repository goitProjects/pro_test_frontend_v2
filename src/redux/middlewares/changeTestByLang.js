import { GET_TEST_SUCCESS } from "../actions/testAction";
import {
  qaTechUk as technicalUk,
  qaTheoryUk as theoryUk,
  qaTechPl as technicalPl,
  qaTheoryPl as theoryPl,
} from "../../options/langData";

const test = {
  uk: { technical: technicalUk, theory: theoryUk },
  pl: { technical: technicalPl, theory: theoryPl },
};

export const changeTesyByLang = (store) => (next) => (action) => {
  if (action.type === GET_TEST_SUCCESS) {
    const { value: lang } = store.getState().lang;
    if (lang !== "en") {
      const { data, type } = action.payload;
      const newData = data.map((el) => test[lang][type][el.questionId - 1]);
      action.payload.data = newData;
    }
  }
  next(action);
};
