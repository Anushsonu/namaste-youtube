import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSLice";
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
