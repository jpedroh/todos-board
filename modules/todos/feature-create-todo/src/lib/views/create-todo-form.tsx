import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CreateTodo, useCreateTodo } from '@todos-board/modules/todos/core';
import { FormEvent, useState } from 'react';

function TodoForm({ onSubmit }: { onSubmit: (todo: CreateTodo) => void }) {
  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const data = Object.fromEntries(
      new FormData(evt.target as HTMLFormElement)
    );
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            fullWidth
            name="title"
            id="title"
            label="Title"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            multiline
            fullWidth
            rows={4}
            name="description"
            id="description"
            label="Description"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button style={{ width: '100%' }} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export function CreateTodoForm() {
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
          <TodoForm onSubmit={createTodo} />
        </DialogContent>
      </Dialog>
    </>
  );
}
