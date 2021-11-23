import { createReducer } from '@reduxjs/toolkit';

const initialUserState = {};

const contactsReducer = createReducer({ ...initialUserState }, {});

export { contactsReducer };
