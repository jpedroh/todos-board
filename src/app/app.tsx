import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CreateTodoForm } from '@todos-board/modules/todos/feature-create-todo';
import { TodosList } from '../../modules/todos/feature-todos-list/src';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CreateTodoForm />
      <TodosList />
    </ThemeProvider>
  );
}
