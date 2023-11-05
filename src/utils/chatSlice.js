import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 25) {
        state.messages.splice(0, 1);
      }
      state.messages.push(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
