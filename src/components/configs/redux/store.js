import { configureStore } from "@reduxjs/toolkit";
import Apireducer from "./Apireducer";
import loginreducer from "./loginreducer";

const store = configureStore({
  reducer: {
    loginreducer: loginreducer,
    Apireducer: Apireducer
  }
});

export default store;