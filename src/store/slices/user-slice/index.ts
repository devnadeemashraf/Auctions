import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    reset: () => {},
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
