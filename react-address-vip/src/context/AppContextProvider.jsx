import { createContext, useContext, useRef, useState } from "react";

/**
 * React Context API 기능을 활용하여 state를 관리하는 도구
 *
 * 다중 구조의 컴포넌트가 겹쳐있는 경우 state를 전파하는 것이 매우 불편한 코드로 작성될 수 있다
 *
 * 이럴 때 Context API를 활용하여 state와 공용으로 사용할 여러가지 함수를 Store에 보관하고 필요한 곳에서만
 * useContext()를 사용하여 쉽게 getter할 수 있도록 도와주는 컴포넌트
 *
 * Context 생성하기
 * 생성된 Context에 state 등을 보관하고 useContext() Hook을 Customizing하여 손쉽게 사용할 수 있게 하는 역할 수행
 *
 * Context를 사용할 컴포넌트들을 합성패턴을 이용하여 관리할 수 있도록 한다
 */
// Context 생성
const AppContext = createContext();

// Context의 Store에 보관된 정보들을 추출하기 위한 Hook 함수 선언
export const useTodoContext = () => {
  // useContext(AppContextProvider) --- 아님!!
  return useContext(AppContext);
};

// Provider를 합성패턴으로 선언하여 필요한 곳에서 끌어올려 사용할 수 있도록 한다
const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "잠자기",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([todo]);

  // Reference를 이용하여 변수 선언하기
  const nextId = useRef(0);
  const textId = useRef();

  // ES6 이후에는 객체에 값을 담을 때 객체의 Key이름과 같은 변수에 담긴 값을 담을 때는
  // Key이름을 한 번만 사용해도 된다.
  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  // 입력된 todo를 todoList에 추가하기
  const todoInsert = () => {
    if (todo.t_text == "") {
      //   alert("할 일을 입력하세요");
      window.alert("할 일을 입력하세요");
      textId.current.focus();
      return;
    }

    setTodoList([...todoList, todo]);
    nextId.current++;
    todoClear();
  };

  // 입력창 Clear
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  // 입력된 todo를 todoList에 추가하기
  const onClick = () => {
    todoInsert();
  };

  // 입력박스에서 Enter 키를 누르면 todo를 todoList에 추가하기
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      todoInsert();
    } else if (e.key === "Escape") {
      todoClear();
    }
  };

  const onDelClick = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      // data-todo-id라고 저장하면 앞에 data-는 dataset으로 변경
      // todo-id는 loser Camel case로 변경되므로 todoId로 변경
      //		todoId 변수에서 getter 할 수 있다.
      const t_id = Number(e.target.dataset.todoId);

      // 배열 요소 중에서 t_id가 일치하는 요소를 삭제하기
      // 원래 배열 요소를 filtering하는데 t_id값이 dataset의 todoId와 일치하지 않는 것만 새로운 배열로 만들어라!
      // !=은 type 무시하고 비교해라!
      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todoList);
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);
    // 배열요소 중에 조건에 맞는 값이 있으면 그 값이 몇 번째 요소인지 index를 return한다
    const index = todoList.findIndex((todo) => todo.t_id === t_id);
    // 찾았으면 ~
    // 해당 요소만 따로 추출하여 selectTodo에 담기
    const selectTodo = todoList[index];

    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };

    setTodoList(_todoList);
  };

  const providerData = {
    textId,
    todo,
    setTodo,
    todoList,
    setTodoList,
    onChange,
    onClick,
    onKeyPress,
    onDelClick,
    onCompClick,
  };

  return <AppContext.Provider value={providerData}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
