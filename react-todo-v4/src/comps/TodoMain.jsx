import React from "react";
import AppContextProvider from "../context/AppContextProvider";

import "../css/Main.css";

function TodoMain({ header, form, children }) {
  return (
    <AppContextProvider>
      <div className="todo_main">
        <main className="todo_main_layout">
          <header>{header}</header>
          <section>{form}</section>
          <section className="todo_list">{children}</section>
        </main>
      </div>
    </AppContextProvider>
  );
}

export default TodoMain;
