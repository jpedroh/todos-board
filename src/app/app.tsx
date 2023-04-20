import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Todo } from '@todos-board/modules/todos/core';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { EditTodo } from '@todos-board/modules/todos/feature-edit-todo';
import { TodosList } from '@todos-board/modules/todos/feature-todos-list';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  const [toEditTodo, setToEditTodo] = useState<Todo>();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CreateTodo />
      <TodosList onEdit={(todo) => setToEditTodo(todo)} />
      <EditTodo todo={toEditTodo} onClose={() => setToEditTodo(undefined)} />
    </ThemeProvider>
  );
}
