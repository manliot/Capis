import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.user = null
        },
    },
})
export const { loginSuccess, logoutSuccess } = slice.actions
export default slice.reducer

export const login = ({ user }) => async dispatch => {
    try {
        dispatch(loginSuccess({ username }));
    } catch (e) {
        return console.error(e.message);
    }
}
