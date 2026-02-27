import React from 'react';
import { useSelector } from 'react-redux';
import { TodoForm } from './components/TodoForm.jsx';
import { TodoList } from './components/TodoList.jsx';
import './App.css';

function App() {
  const tasks = useSelector((state) => state.todo.tasks);
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>📝 Todo List</h1>
          <p className="subtitle">Manage your tasks efficiently with Redux</p>
        </header>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-label">Total Tasks:</span>
            <span className="stat-value">{tasks.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Completed:</span>
            <span className="stat-value">{completedCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Pending:</span>
            <span className="stat-value">{tasks.length - completedCount}</span>
          </div>
        </div>

        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
