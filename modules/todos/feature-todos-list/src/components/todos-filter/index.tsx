import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { TodoStatus } from '@todos-board/modules/todos/core';

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
    <FormGroup dir="horizontal">
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
            checked={isEnabled('ONGOING')}
            onChange={() => toggleStatus('ONGOING')}
          />
        }
        label="Ongoing"
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
  );
}