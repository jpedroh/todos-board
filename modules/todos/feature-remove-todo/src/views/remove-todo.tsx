import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { Todo, useRemoveTodo } from '@todos-board/modules/todos/core';

type Props = {
  todo?: Todo;
  onClose: () => void;
};

export function RemoveTodo({ todo, onClose }: Props) {
  const removeTodo = useRemoveTodo();

  if (!todo) return <></>;

  return (
    <Dialog open={todo != null} onClose={onClose}>
      <DialogTitle>Remove Todo</DialogTitle>
      <DialogContent>
        <Typography>
          Confirm removing Todo <b>{todo.title}</b>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button
          onClick={() => {
            removeTodo(todo.id);
            onClose();
          }}
          autoFocus
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}
