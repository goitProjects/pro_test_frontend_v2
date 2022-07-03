import { createSlice } from "@reduxjs/toolkit";
import { options } from "../../options/langToggleOptions";

const langSlice = createSlice({
  name: "lang",
  initialState: JSON.parse(localStorage.getItem("lang")) ?? options[0],
  reducers: {
    changeLang(state, { payload }) {
      state = payload;
      localStorage.setItem("lang", JSON.stringify(payload));
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
