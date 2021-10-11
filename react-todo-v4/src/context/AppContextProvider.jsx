import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const useTodoContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(0);
  const textId = useRef();

  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  const todoInsert = () => {
    if (todo.t_text == "") {
      window.alert("할 일을 입력하세요");
      textId.current.focus();
      return;
    }

    setTodoList([...todoList, todo]);
    nextId.current++;
    todoClear();
  };

  const queClick = () => {
    window.alert(
      "List 작성하기!" +
        "\n" +
        "1. 키보드로 입력 -> Enter" +
        "\n" +
        "2. 입력 -> 추가 버튼 클릭" +
        "\n" +
        "-----------------------------------------------------------" +
        "\n" +
        "완료한 할 일 표시" +
        "\n" +
        "목록 클릭 -> Check 표시 나타남" +
        "\n" +
        "-----------------------------------------------------------" +
        "\n" +
        "삭제하기" +
        "\n" +
        "1. 리스트에 마우스 hover -> x 클릭 시 List 삭제 가능"
    );
  };

  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  const onClick = () => {
    todoInsert();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      todoInsert();
    } else if (e.key === "Escape") {
      todoClear();
    }
  };

  const onDelClick = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const t_id = Number(e.target.dataset.todoId);

      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todoList);
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);
    const index = todoList.findIndex((todo) => todo.t_id === t_id);

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
    queClick,
  };

  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
