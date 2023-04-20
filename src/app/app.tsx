import Container from '@mui/material/Container';
import { Header } from '@todos-board/modules/shared';
import { ChangeTodoStatus } from '@todos-board/modules/todos/feature-change-todo-status';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { EditTodo } from '@todos-board/modules/todos/feature-edit-todo';
import { RemoveTodo } from '@todos-board/modules/todos/feature-remove-todo';
import { TodosList } from '@todos-board/modules/todos/feature-todos-list';

export function App() {
  return (
    <Container sx={{ pt: 4 }}>
      <Header>Todos Application</Header>
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
    </Container>
  );
}
