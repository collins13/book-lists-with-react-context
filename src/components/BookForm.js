import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">author</label>
      <input
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input type="submit" value="Add Book" />
    </form>
  );
}
