import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: {},
  reducers: {
    reset: () => {},
  },
});

export const { reset } = notificationSlice.actions;
export default notificationSlice.reducer;
