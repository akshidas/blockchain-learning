import { useEffect, useState } from "react";
import { useTodoList } from "../components/todo-list-provider";

const useTaskCount = () => {
  const contract = useTodoList();
  const [taskCount, setTaskCount] = useState(0);

  const getTaskCount = async () => {
    const count = await contract.taskCount();
    setTaskCount(count.toNumber());
  };

  useEffect(() => {
    if (!contract) return;
    getTaskCount();
  }, [contract]);

  return [taskCount, getTaskCount];
};

export default useTaskCount;
