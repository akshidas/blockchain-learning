import { useEffect, useState } from "react";
import { useTodoList } from "../../todo-list-provider";

const useTaskList = ({ taskCount }) => {
  const contract = useTodoList();
  const [taskList, setTaskList] = useState([]);

  const getTaskList = async () => {
    const tasks = await contract.tasks;
    let parsedTasks = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await tasks(i);
      const [id, content, completed] = task;
      parsedTasks.push({
        id: id.toNumber(),
        content,
        completed,
      });
    }
    setTaskList(parsedTasks);
  };

  useEffect(() => {
    if (taskCount === 0) return;
    getTaskList();
  }, [taskCount]);

  return taskList;
};

export default useTaskList;
