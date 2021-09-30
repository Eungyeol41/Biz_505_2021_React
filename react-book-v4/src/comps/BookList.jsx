import React, { useContext } from "react";
// import BookContext from "../context/BookContext";
// import { useBookContext } from "../context/AppContextProvider";
import "../css/BookList.css";
import BookItem from "./BookItem";

// const list_title_names = ["ID", "도서명", "장르"];
// const list_title_view = list_title_names.map((title) => {
//   return <th>{title}</th>;
// });

// 객체배열을 선언하여 List의 제목 배열 만들기
const list_title_names = [
  { id: 0, t_name: "ID" },
  { id: 1, t_name: "도서명" },
  { id: 2, t_name: "장르" },
];
// 제목배열을 사용하여 table의 list 생성하기
const list_title_view = list_title_names.map((title) => {
  return <th key={title.id}>{title.t_name}</th>;
});

function BookList() {
  //   const { bookList } = useContext(BookContext);
  //   const { bookList } = useBookContext();

  return (
    <table className="book_list">
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>
        <BookItem />
      </tbody>
    </table>
  );
}

export default BookList;
