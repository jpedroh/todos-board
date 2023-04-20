import PencilIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { useCreateTodo } from '@todos-board/modules/todos/core';
import { TodoForm } from '@todos-board/modules/todos/shared';
import { useState } from 'react';

const CreateTodoFab = styled(Fab)({
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
});

export function CreateTodo() {
  const createTodo = useCreateTodo();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CreateTodoFab
        onClick={handleOpen}
        color="primary"
        aria-label="Create a Todo"
      >
        <PencilIcon />
      </CreateTodoFab>

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
