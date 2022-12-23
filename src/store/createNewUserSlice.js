import { createSlice } from '@reduxjs/toolkit';

const createNewUserSlice = createSlice({
	name: 'newUser',
	initialState: {
		users: [],
	},
	reducers: {
		newUser(state, action) {
			state.users.push(action.payload);
		},
	},
});

export default createNewUserSlice.reducer;
export const { newUser } = createNewUserSlice.actions;

