import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);

  if (tasks.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
};
