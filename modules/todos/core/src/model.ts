export type Todo = {
  id: number;
  title: string;
  description: string;
  status: 'PENDING' | 'ONGOING' | 'DONE';
  createdAt: Date;
};

export type TodoStatus = 'PENDING' | 'ONGOING' | 'DONE';

export type CreateTodo = {
  title: string;
  description: string;
};
