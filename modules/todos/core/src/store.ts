import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CreateTodo, Todo, TodoId, TodoStatus } from './model';

type State = {
  todos: Todo[];
  createTodo: (todo: CreateTodo) => void;
  editTodo: (id: TodoId, todo: Todo) => void;
  removeTodo: (id: TodoId) => void;
  changeTodoStatus: (id: TodoId, status: TodoStatus) => void;
};

export const useStore = create<State>()(
  persist(
    (set) => ({
      todos: [],
      createTodo: (todo) => {
        return set((state) => {
          const aTodo = {
            id: state.todos.length + 1,
            status: 'PENDING' as const,
            createdAt: new Date(),
            ...todo,
          };

          return { todos: [aTodo, ...state.todos] };
        });
      },
      editTodo: (id, todo) => {
        return set((state) => {
          const newTodos = [...state.todos];
          const index = state.todos.findIndex((value) => value.id === id);
          newTodos[index] = todo;
          return { todos: newTodos };
        });
      },
      removeTodo: (id) => {
        return set((state) => {
          return { todos: state.todos.filter((todo) => todo.id !== id) };
        });
      },
      changeTodoStatus: (id, status) => {
        return set((state) => {
          const newTodos = [...state.todos];
          const index = state.todos.findIndex((value) => value.id === id);
          newTodos[index] = { ...state.todos[index], status };
          return { todos: newTodos };
        });
      },
    }),
    {
      name: 'todos-storage',
    }
  )
);
