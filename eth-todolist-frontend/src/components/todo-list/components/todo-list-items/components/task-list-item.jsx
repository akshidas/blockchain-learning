import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import React from "react";

const TaskListItem = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <FormControl key={id} sx={{}}>
      <FormControlLabel
        sx={{ width: "fit-content" }}
        control={<Checkbox checked={completed} />}
        label={content}
      />
    </FormControl>
  );
};

export default TaskListItem;
