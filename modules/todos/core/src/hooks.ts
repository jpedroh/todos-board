import { TodoStatus } from './model';
import { useStore } from './store';

export const useCreateTodo = () => useStore((state) => state.createTodo);

export const useListTodos = (statuses: Array<TodoStatus>) =>
  useStore((state) => {
    return Array.from(state.todos.values()).filter((todo) => {
      return statuses.includes(todo.status);
    });
  });

export const useEditTodo = () => useStore((state) => state.editTodo);

export const useRemoveTodo = () => useStore((state) => state.removeTodo);

export const useChangeTodoStatus = () => useStore((state) => state.changeTodoStatus);
