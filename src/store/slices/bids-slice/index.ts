import { createSlice } from "@reduxjs/toolkit";

const bidsSlice = createSlice({
  name: "bidsSlice",
  initialState: {},
  reducers: {
    reset: () => {},
  },
});

export const { reset } = bidsSlice.actions;
export default bidsSlice.reducer;
