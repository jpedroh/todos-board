import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import {
  Todo,
  TodoStatus,
  useChangeTodoStatus,
} from '@todos-board/modules/todos/core';
import { useState } from 'react';

type Props = {
  todo: Todo;
};

export function ChangeTodoStatus({ todo }: Props) {
  const changeTodoStatus = useChangeTodoStatus();

  const [newStatus, setNewStatus] = useState<TodoStatus>(
    todo?.status ?? 'PENDING'
  );
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined">
        Change status
      </Button>

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Change status</DialogTitle>
        <DialogContent>
          <Typography>
            The todo <b>{todo.title}</b> is currently{' '}
            {todo.status.toLowerCase()}. Pick its new status.
            <FormControl fullWidth margin="dense">
              <InputLabel id="new-status">New Status</InputLabel>
              <Select
                labelId="new-status"
                id="new-status-select"
                value={newStatus}
                label="New Status"
                onChange={(evt) => setNewStatus(evt.target.value as TodoStatus)}
              >
                <MenuItem value={'PENDING'}>PENDING</MenuItem>
                <MenuItem value={'ONGOING'}>ONGOING</MenuItem>
                <MenuItem value={'DONE'}>DONE</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancel</Button>
          <Button
            onClick={() => {
              changeTodoStatus(todo.id, newStatus);
              onClose();
            }}
            autoFocus
          >
            Change status
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
