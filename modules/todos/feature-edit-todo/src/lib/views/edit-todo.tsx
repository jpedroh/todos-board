import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Todo, useEditTodo } from '@todos-board/modules/todos/core';
import { TodoForm } from '@todos-board/modules/todos/shared';

export function EditTodo({
  todo,
  onClose,
}: {
  todo?: Todo;
  onClose: () => void;
}) {
  const editTodo = useEditTodo();

  if (!todo) return <></>;

  return (
    <Dialog open={todo != null} onClose={onClose}>
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
  );
}
