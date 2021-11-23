import { createReducer } from '@reduxjs/toolkit';

const initialUserState = {};

const MainPageReducer = createReducer({ ...initialUserState }, {});

export { MainPageReducer };
