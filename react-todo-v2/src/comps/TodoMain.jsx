import React, { Children } from "react";
import AppContextProvider from "../context/AppContextProvider";

function TodoMain({ header, form, children }) {
  return (
    <div className="todo_main">
      <AppContextProvider>
        <main className="todo_main_layout">
          <header className="App-header">{header}</header>
          <section>{form}</section>
          <section>{children}</section>
        </main>
      </AppContextProvider>
    </div>
  );
}

export default TodoMain;
