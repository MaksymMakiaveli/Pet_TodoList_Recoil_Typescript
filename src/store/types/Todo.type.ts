export interface Task {
  id: string;
  author: string;
  title: string;
  description: string;
  isCompletion: boolean;
  createdDate: Date;
  updatedDate: Date;
}

export type TaskForm = Pick<Task, 'author' | 'description' | 'title'>;
