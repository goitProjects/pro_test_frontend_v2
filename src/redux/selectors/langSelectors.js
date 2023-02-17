import { createSelector } from "@reduxjs/toolkit";

export const getLang = (state) => state.lang;
export const getLangValue = (state) => getLang(state).value;

export const getLangOption = createSelector([getLang], (lang) => lang);
