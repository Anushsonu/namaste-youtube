import { createSlice } from "@reduxjs/toolkit";

const appSLice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showShimmer: true,
    darkTheme: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
    setDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export default appSLice.reducer;
export const { toggleMenu, closeMenu, openMenu, setShowShimmer, setDarkTheme } =
  appSLice.actions;
