import Stack from '@mui/material/Stack';
import {
  Todo,
  TodoStatus,
  useListTodos,
} from '@todos-board/modules/todos/core';
import { ReactNode, useState } from 'react';
import { TodoItem } from '../components/todo-item';
import { TodosFilter } from '../components/todos-filter';

type Props = {
  availableActions: (todo: Todo) => ReactNode;
};

export function TodosList({ availableActions }: Props) {
  const [statuses, setStatuses] = useState([
    'PENDING',
    'IN PROGRESS',
    'DONE',
  ] as Array<TodoStatus>);
  const todos = useListTodos(statuses);

  return (
    <Stack spacing={2}>
      <TodosFilter statuses={statuses} onChange={setStatuses} />

      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          availableActions={availableActions}
        />
      ))}
    </Stack>
  );
}
