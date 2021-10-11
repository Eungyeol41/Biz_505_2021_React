import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import Login from "./comps/Login";
import MainComp from "./comps/MainComp";

function App() {
  return (
    <div className="App gradient-border">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>TO DO LIST</h2>
      </header>
      {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
      {/* <TodoMain form={<TodoInput />}>
        <TodoList />
      </TodoMain> */}
      {/* <MyButton /> */}
      {/* <CompButton onClick={() => alert("Let's Go Home!!")}>Home</CompButton> */}
      {/* <Login /> */}
      <MainComp />
    </div>
  );
}

export default App;
