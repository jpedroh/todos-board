import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CreateTodo } from '@todos-board/modules/todos/core';
import { FormEvent } from 'react';

export function TodoForm({ onSubmit }: { onSubmit: (todo: CreateTodo) => void }) {
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