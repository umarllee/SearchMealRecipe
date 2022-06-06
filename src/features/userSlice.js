import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: "user",
    initialState : {
        user : false
    },

    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const {login} = userSlice.actions;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;