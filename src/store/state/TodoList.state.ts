import { atom } from 'recoil';
import { Task } from '../types/Todo.type';

export const TodoListState = atom<Task[]>({
  key: 'todoListState',
  default: [],
});
