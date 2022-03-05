import React from 'react';
import './TodoItem.scss';
import { Task } from '../../store/types/Todo.type';
import { Divider } from 'rsuite';

interface Props {
  todo: Task;
}

const TodoItem = (props: Props) => {
  const { todo } = props;

  return (
    <div className="todoItem">
      <div className="todoItem-header">
        <h6>{todo.title}</h6>
      </div>
      <Divider className="todoItem-divider" />
      <div className="todoItem-description">
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

export default TodoItem;
