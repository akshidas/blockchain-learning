import { createContext, useContext } from "react";
import useConnectTodoList from "./hooks/useConnectTodoList";

const todoListContext = createContext(null);

export const TodoListProvider = ({ children }) => {
  const todoList = useConnectTodoList();

  return (
    <todoListContext.Provider value={todoList}>
      {children}
    </todoListContext.Provider>
  );
};

export const useTodoList = () => useContext(todoListContext);
