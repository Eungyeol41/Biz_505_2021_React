import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInsert from "./BookInsert";
import BookView from "./BookView";
import BookContext from "../context/BookContext";

/**
 * 컴포넌트의 선택지
 */
function BookMain() {
  const [book, setBook] = useState({
    b_name: "자바야 놀자",
    b_genre: "IT 개발서",
  });

  const providerData = { book, setBook };

  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          Home 화면
        </Route>
        <Route path="/insert" exact>
          <BookInsert />
        </Route>
        <Route path="/list" exact>
          List 화면
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
