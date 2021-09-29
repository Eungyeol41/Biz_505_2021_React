import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import "../css/BookInsert.css";
import BookView from "./BookView";
import MyButton from "../My/MyButton";

function BookInsert() {
  const { book, setBook } = useContext(BookContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <>
      <div className="input_box">
        <label>도서명</label>
        <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        <label>장르</label>
        <input name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
        {/* <button>리스트 추가</button> */}
        <MyButton onClick={() => alert("Hi")}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInsert;
