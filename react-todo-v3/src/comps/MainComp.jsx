import React from "react";
import { Route } from "react-router";
import { useTodoContext } from "../context/AppContextProvider";
import UserContextProvider from "../context/UserContextProvider";
import Login from "./Login";
import MainNav from "./MainNav";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoMain from "./TodoMain";

function MainComp() {
  //   const { user } = useTodoContext();

  const navList = [
    { id: 0, title: "Home", link: "/" },
    // user?.userId
    //   ? { id: 1, title: "Login", link: "/login", align: true }
    //   : { id: 2, title: "Logout", link: "/logout", align: true },
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
      <Route path="/logout">
        <h1>Logout</h1>
      </Route>
    </MainNav>
  );
}

export default MainComp;
