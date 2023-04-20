import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { TodoStatus } from '@todos-board/modules/todos/core';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  statuses: Array<TodoStatus>;
  onChange: (x: Array<TodoStatus>) => void;
};

export function TodosFilter({ statuses, onChange }: Props) {
  function isEnabled(status: TodoStatus) {
    return statuses.includes(status);
  }

  function toggleStatus(status: TodoStatus) {
    if (isEnabled(status)) {
      onChange(statuses.filter((item) => item !== status));
    } else {
      onChange([...statuses, status]);
    }
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter by status</FormLabel>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={isEnabled('PENDING')}
              onChange={() => toggleStatus('PENDING')}
            />
          }
          label="Pending"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isEnabled('IN PROGRESS')}
              onChange={() => toggleStatus('IN PROGRESS')}
            />
          }
          label="In progress"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isEnabled('DONE')}
              onChange={() => toggleStatus('DONE')}
            />
          }
          label="Done"
        />
      </FormGroup>
    </FormControl>
  );
}
