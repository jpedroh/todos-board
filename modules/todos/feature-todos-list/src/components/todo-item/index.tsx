import { Todo } from '@todos-board/modules/todos/core';

type Props = {
  todo: Todo;
  onEdit: (x: Todo) => void;
  onRemove: (x: Todo) => void;
  onChangeStatus: (x: Todo) => void;
};

export function TodoItem({ todo, onEdit, onRemove, onChangeStatus }: Props) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onRemove(todo)}>Remove</button>
      <button onClick={() => onChangeStatus(todo)}>Change status</button>
    </div>
  );
}
