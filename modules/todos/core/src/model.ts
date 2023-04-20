export type Todo = {
  id: TodoId;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
};

export type TodoId = number;

export type TodoStatus = 'PENDING' | 'IN PROGRESS' | 'DONE';

export type CreateTodo = {
  title: string;
  description: string;
};
