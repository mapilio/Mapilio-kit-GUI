import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  password: string | null;
  isLogin: boolean;
}

const initialState: UserState = {
  email: null,
  password: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLogin = true;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
