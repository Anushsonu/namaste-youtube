import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSLice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;
