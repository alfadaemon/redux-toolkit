import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'title 1', body: 'body 1' },
  { id: '2', title: 'Slices... ', body: 'Slices of pizza'},
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions

export default postsSlice.reducer