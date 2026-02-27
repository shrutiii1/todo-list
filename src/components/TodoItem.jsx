import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, changeStatus } from '../redux/todoSlice';

export const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(changeStatus(task.id, e.target.value));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <p className={`todo-text ${task.status === 'completed' ? 'completed' : ''}`}>
          {task.text}
        </p>
        <span className="todo-date">{task.createdAt}</span>
      </div>
      <div className="todo-actions">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="status-select"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};
