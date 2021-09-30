import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInsert from "./BookInsert";
import BookContext from "../context/BookContext";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

function BookMain() {
  return (
    <>
      <AppContextProvider>
        {/* <BookContext.Provider value={providerData}> */}
        <Route path="/" exact>
          Home 화면
        </Route>
        <Route path="/insert" exact>
          <BookInsert />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
        {/* </BookContext.Provider> */}
      </AppContextProvider>
    </>
  );
}

export default BookMain;
