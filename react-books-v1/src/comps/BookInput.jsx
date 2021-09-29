import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookInput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandler = (e) => {
    setBook(e.target.value);
  };
  return (
    <div>
      <input placeholder="도서명 입력" value={book} onChange={onChangeHandler} />
    </div>
  );
}

export default BookInput;
