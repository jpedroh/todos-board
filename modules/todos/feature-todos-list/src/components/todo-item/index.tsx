import { Todo } from '@todos-board/modules/todos/core';

export function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
}
