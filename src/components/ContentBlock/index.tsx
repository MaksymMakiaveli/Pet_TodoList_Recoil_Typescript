import React from 'react';
import './ContentBlock.scss';
import { useRecoilValue } from 'recoil';
import { TodoListState } from '../../store/state/TodoList.state';
import TodoItem from '../TodoItem';

const ContentBlock = () => {
  const todoList = useRecoilValue(TodoListState);

  return (
    <section className="content-block">
      <div className="wrapper-todoList">
        {todoList.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
    </section>
  );
};

export default ContentBlock;
