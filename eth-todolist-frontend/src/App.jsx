import TodoList from "./components/todo-list";
import { TodoListProvider } from "./components/todo-list/components/todo-list-provider";

function App() {
  return (
    <TodoListProvider>
      <TodoList />
    </TodoListProvider>
  );
}

export default App;
