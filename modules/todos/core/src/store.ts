import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CreateTodo, Todo } from './model';

type State = {
  todos: Todo[];
  createTodo: (todo: CreateTodo) => void;
};

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      todos: [],
      createTodo: (todo) => {
        return set((state) => {
          const aTodo = {
            ...todo,
            id: get().todos.length + 1,
            status: 'PENDING' as const,
            createdAt: new Date(),
          };
          return { todos: [aTodo, ...state.todos] };
        });
      },
    }),
    {
      name: 'todos-storage',
    }
  )
);
