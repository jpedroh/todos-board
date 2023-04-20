import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Todo } from '@todos-board/modules/todos/core';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { EditTodo } from '@todos-board/modules/todos/feature-edit-todo';
import { RemoveTodo } from '@todos-board/modules/todos/feature-remove-todo';
import { TodosList } from '@todos-board/modules/todos/feature-todos-list';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  const [toEditTodo, setToEditTodo] = useState<Todo>();
  const [toRemoveTodo, setToRemoveTodo] = useState<Todo>();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CreateTodo />
      <TodosList
        onEdit={(todo) => setToEditTodo(todo)}
        onRemove={(todo) => setToRemoveTodo(todo)}
      />
      <EditTodo todo={toEditTodo} onClose={() => setToEditTodo(undefined)} />
      <RemoveTodo
        todo={toRemoveTodo}
        onClose={() => setToRemoveTodo(undefined)}
      />
    </ThemeProvider>
  );
}
