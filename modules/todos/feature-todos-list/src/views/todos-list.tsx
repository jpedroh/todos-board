import {
  Todo,
  TodoStatus,
  useListTodos,
} from '@todos-board/modules/todos/core';
import { useState } from 'react';
import { TodoItem } from '../components/todo-item';
import { TodosFilter } from '../components/todos-filter';

type Props = {
  onEdit: (x: Todo) => void;
  onRemove: (x: Todo) => void;
};

export function TodosList({ onEdit, onRemove }: Props) {
  const [statuses, setStatuses] = useState([
    'PENDING',
    'ONGOING',
    'DONE',
  ] as Array<TodoStatus>);
  const todos = useListTodos(statuses);

  return (
    <section>
      <TodosFilter statuses={statuses} onChange={setStatuses} />
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}
