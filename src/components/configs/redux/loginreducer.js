import { createSlice } from "@reduxjs/toolkit";

const loginreducer = createSlice({
  name: "loginreducer",
  initialState: {
    email: "dummydata@gmail.com",
    password: "123456",
    userName: "abc",
  },
  reducers: {
    editer(state, action) {

      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { editer } = loginreducer.actions;

export default loginreducer.reducer;