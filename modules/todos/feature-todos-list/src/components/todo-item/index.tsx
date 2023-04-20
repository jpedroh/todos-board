import { Todo } from '@todos-board/modules/todos/core';

type Props = {
  todo: Todo;
  onEdit: (x: Todo) => void;
};

export function TodoItem({ todo, onEdit }: Props) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      <button onClick={() => onEdit(todo)}>Edit</button>
    </div>
  );
}
