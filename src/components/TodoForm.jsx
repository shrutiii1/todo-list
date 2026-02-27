import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';

export const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTask = {
        id: uuidv4(),
        text: input,
        status: 'pending',
        createdAt: new Date().toLocaleString(),
      };
      dispatch(addTask(newTask));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
};
