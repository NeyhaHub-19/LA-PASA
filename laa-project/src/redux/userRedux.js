import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false; // Optionally reset error on a new login attempt
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false; // Clears any errors upon successful login
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      // console.log("loginFailure reducer triggered", state);
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false; // Reset the error as well
    }
  }
});

export const { loginStart, loginSuccess, loginFailure,logout } = userSlice.actions;
export default userSlice.reducer;