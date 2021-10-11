import React from "react";
import { Route } from "react-router-dom";
import UserContextProvider from "../context/UserContextProvider";
import Login from "./Login";
import MainNav from "./MainNav";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoMain from "./TodoMain";

function MainComp() {
  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Login", link: "/login", align: true },
  ];

  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        <TodoMain form={<TodoInput />}>
          <TodoList />
        </TodoMain>
      </Route>
      <Route path="/login">
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      </Route>
    </MainNav>
  );
}

export default MainComp;
