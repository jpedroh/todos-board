import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ChangeTodoStatus } from '@todos-board/modules/todos/feature-change-todo-status';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { EditTodo } from '@todos-board/modules/todos/feature-edit-todo';
import { RemoveTodo } from '@todos-board/modules/todos/feature-remove-todo';
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
      <TodosList
        availableActions={(todo) => (
          <>
            <EditTodo todo={todo} />
            <RemoveTodo todo={todo} />
            <ChangeTodoStatus todo={todo} />
          </>
        )}
      />
    </ThemeProvider>
  );
}
