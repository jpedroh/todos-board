export type Todo = {
  id: TodoId;
  title: string;
  description: string;
  status: 'PENDING' | 'ONGOING' | 'DONE';
  createdAt: Date;
};

export type TodoId = number;

export type TodoStatus = 'PENDING' | 'ONGOING' | 'DONE';

export type CreateTodo = {
  title: string;
  description: string;
};
