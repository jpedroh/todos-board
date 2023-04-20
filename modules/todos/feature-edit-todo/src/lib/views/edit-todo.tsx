import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Todo, useEditTodo } from '@todos-board/modules/todos/core';
import { TodoForm } from '@todos-board/modules/todos/shared';
import { useState } from 'react';

export function EditTodo({ todo }: { todo: Todo }) {
  const editTodo = useEditTodo();
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit</Button>

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TodoForm
            initialValue={todo}
            onSubmit={(payload) => {
              editTodo(todo.id, { ...todo, ...payload });
              onClose();
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
