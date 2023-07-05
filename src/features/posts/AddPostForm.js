import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";

function AddPostForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const onTitleChanged = e => setTitle(e.target.value)
  const onBodyChanged = e => setBody(e.target.value)
  
  const onSavePostClick = () => {
    if (title && body) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          body,
        })
      )
      setTitle('')
      setBody('')
    }
  }
  
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
            id="postBody"
            name="postBody"
            value={body}
            onChange={onBodyChanged}
        />
        <button onClick={onSavePostClick} type="button">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm