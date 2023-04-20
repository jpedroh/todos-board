import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CreateTodo, Todo } from '@todos-board/modules/todos/core';
import { FormEvent } from 'react';

type Props = {
  initialValue?: Todo;
  onSubmit: (todo: CreateTodo) => void;
};

export function TodoForm({ initialValue, onSubmit }: Props) {
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
            required
            defaultValue={initialValue?.title}
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
            required
            defaultValue={initialValue?.description}
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
          <Button type="submit" style={{ width: '100%' }} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
