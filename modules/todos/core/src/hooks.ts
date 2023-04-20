import { TodoStatus } from './model';
import { useStore } from './store';

export const useCreateTodo = () => useStore((state) => state.createTodo);

export const useListTodos = (statuses: Array<TodoStatus>) =>
  useStore((state) => {
    return state.todos.filter((todo) => statuses.includes(todo.status));
  });
