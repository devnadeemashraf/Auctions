import { configureStore } from "@reduxjs/toolkit";

import { userSlice, bidsSlice, notificationSlice } from "@/store/slices";

const store = configureStore({
  reducer: {
    user: userSlice,
    bids: bidsSlice,
    notifications: notificationSlice,
  },
});

export type TRootState = typeof store.getState;
export default store;
