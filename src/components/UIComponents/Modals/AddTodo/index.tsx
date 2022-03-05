import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Modal } from 'rsuite';
import { CustomButton, CustomInput, CustomTextArea } from '../../index';

import { Task, TaskForm } from '../../../../store/types/Todo.type';
import { TodoListState } from '../../../../store/state/TodoList.state';

import './AddTodo.scss';
import { useSetRecoilState } from 'recoil';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddTodo = (props: Props) => {
  const { open, onClose } = props;
  const { register, handleSubmit } = useForm<TaskForm>();
  const setNewTodo = useSetRecoilState(TodoListState);

  const onSubmit: SubmitHandler<TaskForm> = (data) => {
    const idTask = uuidv4();
    const newTodo: Task = {
      ...data,
      isCompletion: false,
      createdDate: new Date(),
      updatedDate: new Date(),
      id: idTask,
    };
    setNewTodo((prevState) => [...prevState, newTodo]);
    onClose();
  };

  return (
    <Modal className="addTodo" open={open} onClose={onClose}>
      <Modal.Header closeButton={false}>
        <h4>Add Todo</h4>
      </Modal.Header>
      <Modal.Body className="addTodo__content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <CustomInput
              placeholder="Author..."
              id="author"
              label="Author"
              {...register('author')}
            />
            <CustomInput placeholder="Title..." id="title" label="Title" {...register('title')} />
            <CustomTextArea
              placeholder="Description..."
              id="description"
              label="Description"
              {...register('description')}
            />
          </div>
          <div className="button-wrapper">
            <CustomButton label="submit" type="submit" color="green" />
            <CustomButton label="cancel" type="submit" color="red" onClick={onClose} />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(AddTodo);
