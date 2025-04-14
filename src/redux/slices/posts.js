import { createSlice } from "@reduxjs/toolkit";

//начальное состояние для posts и tags
const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts", // название среза
  initialState, // начальное состояние
  reducer: {}, // функции изменяющие состояние
});

export const postsReducer = postsSlice.reducer;
