import { createSlice } from "@reduxjs/toolkit";
import { options } from "../../options/langToggleOptions";

const langSlice = createSlice({
  name: "lang",
  initialState: JSON.parse(localStorage.getItem("lang")) ?? options[0],
  reducers: {
    changeLang(_, { payload }) {
      localStorage.setItem("lang", JSON.stringify(payload));
      return payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
