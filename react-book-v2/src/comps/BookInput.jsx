import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import book from "../context/BookContext";
import BookList from "./BookList";
import BookView from "./BookView";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const bookInsert = () => {
    // Math.random(): 0 ~ 1 미만의 실수형 난수를 생성한다.
    setBook({ ...book, b_id: Math.random() });
    setBookList([...bookList, book]);
  };

  return (
    <div>
      <input name="b_name" onChange={onChangeHandler} placeholder="Book Name" value={book.b_name} />
      <input name="b_genre" onChange={onChangeHandler} placeholder="Genre" value={book.b_genre} />
      <button onClick={bookInsert}>List Insert</button>
      <BookView />
    </div>
  );
}

export default BookInput;
