import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import MyButton from "./comps/MyButton";
import CompButton from "./comps/CompButton";

function App() {
  return (
    <div className="App gradient-border">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
      <TodoMain form={<TodoInput />} header="TODO LIST">
        <TodoList />
      </TodoMain>
      {/* <MyButton /> */}
      <CompButton onClick={() => alert("Let's Go Home!!")}>Home</CompButton>
    </div>
  );
}

export default App;
