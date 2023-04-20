import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { TodosList } from '@todos-board/modules/todos/feature-todos-list';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CreateTodo />
      <TodosList />
    </ThemeProvider>
  );
}
