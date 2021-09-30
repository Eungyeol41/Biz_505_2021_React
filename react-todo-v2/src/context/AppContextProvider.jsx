import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

// 함수 내부에서 단 한 줄의 return만 있을 경우 모두 생략 가능!
export const useTodoContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "빠밤",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([{ t_id: 0, t_text: "ddd", t_isComplete: false }]);

  const onChange = (e) => {
    setTodo({
      t_id: todoList[todoList.length - 1].t_id + 1,
      t_text: e.target.value,
      t_isComplete: false,
    });
  };
  const onClick = (e) => {
    setTodoList([...todoList, todo]);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodoList([...todoList, todo]);
    }
  };

  const completeToggle = (id) => {};
  const todoDelete = (id) => {};

  /**
   * state를 관리(추가, 수정, 삭제)하기 위하여 setState()를 반드시 props에 담아서 하위 컴포넌트로 보내야 한다.
   *
   * 하지만 setState()는 어디선가 잘못 실행되면 실제 데이터에 문제가 발생할 수 있다
   *
   * 어차피 setState()는 어딘가에서 발생하는 eventHandler에서 주로 사용하기 때문에
   * 	차라리 eventHandler를 만들어서 배포하면 setState()가 어디에서 변화, 사용되는 지 관리하기 용이함.
   */
  const providerData = {
    todo,
    onChange,
    onClick,
    onKeyPress,
    todoList,
    completeToggle,
    todoDelete,
  };
  return <AppContext.Provider value={providerData}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
