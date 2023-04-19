import { useStore } from './store';

export const useCreateTodo = () => useStore((state) => state.createTodo);
