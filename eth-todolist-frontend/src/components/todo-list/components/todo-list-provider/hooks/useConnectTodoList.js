import { useEffect, useState } from "react";
import connectToTodoList from "../utils/connect-to-todo-list";

const useConnectTodoList = () => {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    (async () => {
      const todoList = await connectToTodoList();
      setTodoList(todoList);
    })();
  }, []);

  return todoList;
};

export default useConnectTodoList;
