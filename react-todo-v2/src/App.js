import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App gradient-border">
      <TodoMain form={<TodoInput />} header="TO DO LIST">
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default App;
