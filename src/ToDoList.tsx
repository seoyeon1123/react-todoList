import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('toDo', {
              required: 'Please Write a To Do',
            })}
            placeholder="write a to do"
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default ToDoList;