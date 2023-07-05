import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'title 1', body: 'body 1' },
  { id: '2', title: 'Slices... ', body: 'Slices of pizza'},
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  }
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer