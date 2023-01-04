import { createSlice } from "@reduxjs/toolkit";

const Apireducer = createSlice({

  name: "Apireducer",
  initialState: {
apidata: {}
  },
  reducers: {
    deleter(state, action) {

      state.data = {};
    },
    adder(state, action) {
console.log(action)
console.log(state.apidata)
state.apidata = action.payload.products;
console.log(state.apidata)
      }
  },
});

export const { deleter, adder } = Apireducer.actions;

export default Apireducer.reducer;