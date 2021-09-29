import React from "react";
import { Route } from "react-router-dom";
import BookInsert from "./BookInsert";
import BookView from "./BookView";

function BookMain() {
  return (
    <>
      <Route path="/" exact>
        Home 화면
      </Route>
      <Route path="/insert" exact>
        <BookInsert />
        <BookView />
      </Route>
      <Route path="/list" exact>
        List 화면
      </Route>
    </>
  );
}

export default BookMain;
