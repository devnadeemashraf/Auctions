import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export type TRootState = typeof store.getState;
export default store;
