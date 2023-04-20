import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Todo } from '@todos-board/modules/todos/core';
import { ReactNode } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TodoItemDate({ createdAt }: { createdAt: Date }) {
  return (
    <Chip
      color={'default'}
      label={
        <Stack direction={'row'} gap={0.5} alignItems={'center'}>
          <AccessTimeIcon sx={{ fontSize: 16 }} />
          {new Intl.DateTimeFormat().format(new Date(createdAt))}
        </Stack>
      }
    />
  );
}

export function TodoItem({
  todo,
  availableActions,
}: {
  todo: Todo;
  availableActions: (x: Todo) => ReactNode;
}) {
  const statusColor = {
    PENDING: 'warning',
    'IN PROGRESS': 'primary',
    DONE: 'success',
  } as const;

  return (
    <Card>
      <CardContent>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ mb: 1.5 }}
        >
          <Typography variant="h5">{todo.title}</Typography>
          <Stack direction={'row'} gap={1}>
            <TodoItemDate createdAt={todo.createdAt} />
            <Chip color={statusColor[todo.status]} label={todo.status} />
          </Stack>
        </Stack>

        <Typography variant="body2">{todo.description}</Typography>
      </CardContent>

      <CardActions>{availableActions(todo)}</CardActions>
    </Card>
  );
}
