import { useCreateTodo } from '@todos-board/modules/todos/core';
import { FormEvent } from 'react';

export function CreateTodoForm() {
  const createTodo = useCreateTodo();

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const data = Object.fromEntries(
      new FormData(evt.target as HTMLFormElement)
    );
    createTodo(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input required name="title" id="title" />

      <label htmlFor="description">Description</label>
      <textarea required name="description" id="description" />

      <button>Create</button>
    </form>
  );
}
