import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ChangeTodoStatus } from '@todos-board/modules/todos/feature-change-todo-status';
import { CreateTodo } from '@todos-board/modules/todos/feature-create-todo';
import { EditTodo } from '@todos-board/modules/todos/feature-edit-todo';
import { RemoveTodo } from '@todos-board/modules/todos/feature-remove-todo';
import { TodosList } from '@todos-board/modules/todos/feature-todos-list';

const Layout = styled(Container)({
  paddingTop: '2rem',
});

const Header = styled(Box)(({ theme }) => ({
  paddingBottom: '1rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #555',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export function App() {
  return (
    <Layout>
      <Header>
        <Typography variant="h4">Todos Application</Typography>
      </Header>
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
    </Layout>
  );
}
