import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {},
  reducers: {
    reset: () => {},
  },
});

export const { reset } = appSlice.actions;
export default appSlice.reducer;
