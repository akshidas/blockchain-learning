import { Stack } from "@mui/material";
import TaskListItem from "./components/task-list-item";
import useTaskList from "./hooks/use-task-list";

const TodoListItems = ({ taskCount }) => {
  const taskList = useTaskList({ taskCount });

  return (
    <Stack spacing={1} justifyContent="flex-end">
      {taskList.map((task) => {
        return <TaskListItem task={task} key={task.id} />;
      })}
    </Stack>
  );
};

export default TodoListItems;
