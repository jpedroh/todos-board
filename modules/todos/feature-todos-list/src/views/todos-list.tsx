import { TodoStatus, useListTodos } from '@todos-board/modules/todos/core';
import { useState } from 'react';
import { TodoItem } from '../components/todo-item';
import { TodosFilter } from '../components/todos-filter';

export function TodosList() {
  const [statuses, setStatuses] = useState([
    'PENDING',
    'ONGOING',
    'DONE',
  ] as Array<TodoStatus>);
  const todos = useListTodos(statuses);

  return (
    <section>
      <TodosFilter statuses={statuses} onChange={setStatuses} />
      {todos.map((todo, key) => {
        return <TodoItem todo={todo} key={key} />;
      })}
    </section>
  );
}
