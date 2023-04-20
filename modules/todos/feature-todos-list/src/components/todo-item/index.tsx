import { Todo } from '@todos-board/modules/todos/core';
import { ReactNode } from 'react';

type Props = {
  todo: Todo;
  availableActions: (x: Todo) => ReactNode;
};

export function TodoItem({ todo, availableActions }: Props) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      {availableActions(todo)}
    </div>
  );
}
