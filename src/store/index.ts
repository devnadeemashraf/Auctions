import { configureStore } from "@reduxjs/toolkit";

import { appSlice, userSlice } from "@store/slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export type TRootState = typeof store.getState;
export default store;
