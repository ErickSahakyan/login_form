import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createNewUserSlice from './createNewUserSlice';

const rootReducer = combineReducers({
	create: createNewUserSlice,
});


export const store = configureStore({
	reducer: rootReducer,
});