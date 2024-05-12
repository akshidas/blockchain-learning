import TodoListItems from "./components/todo-list-items";
import useTaskCount from "./hooks/use-task-count";

import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

const TodoList = () => {
  const [taskCount, getTaskCount] = useTaskCount();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target.content;
    try {
      await (await todoList.addTask(value)).wait();
      getTaskCount();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Task Count: {taskCount}</Typography>
      <TodoListItems taskCount={taskCount} />
      <Box>
        <form onSubmit={onSubmit}>
          <FormControl>
            <TextField name="content" label="New Task" />
          </FormControl>
          <Button type="submit">add</Button>
        </form>
      </Box>
    </Container>
  );
};

export default TodoList;
