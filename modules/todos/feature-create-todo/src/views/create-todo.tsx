import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateTodo } from '@todos-board/modules/todos/core';
import { TodoForm } from '@todos-board/modules/todos/shared';
import { useState } from 'react';

export function CreateTodo() {
  const createTodo = useCreateTodo();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Todo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Todo</DialogTitle>
        <DialogContent>
          <TodoForm
            onSubmit={(todo) => {
              createTodo(todo);
              handleClose();
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
