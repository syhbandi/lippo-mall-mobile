import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
  id: string;
  name: string;
  role: string;
  isLoggedIn: boolean
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as UserType
  },
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
    logout(state, action) {
      state.user = {} as UserType;
    },
  },
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;