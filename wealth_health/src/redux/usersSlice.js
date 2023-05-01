import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) =>{
            state.list.push(action.payload)
        }
    },
});

export const { addUser } = usersSlice.actions;

export const getUsersList = state => state.users.list;

export default usersSlice.reducer;