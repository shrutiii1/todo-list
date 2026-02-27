# Todo List App with Redux

A modern, fully-featured todo list application built with React and Redux for state management.

## Features

✅ **Add Task** - Create new tasks with a simple input form
✅ **Change Status** - Mark tasks as pending, in-progress, or completed
✅ **Delete Task** - Remove tasks from your list
✅ **Task Statistics** - View total, completed, and pending task counts
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
✅ **Redux State Management** - Centralized state management for predictable data flow

## Tech Stack

- **React 18** - UI library
- **Redux** - State management
- **React-Redux** - React bindings for Redux
- **Vite** - Modern build tool
- **CSS3** - Styling with responsive design

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx      - Form component for adding tasks
│   ├── TodoItem.jsx      - Individual task component
│   ├── TodoList.jsx      - List container component
│   └── App.jsx           - Main application component
├── redux/
│   ├── todoSlice.js      - Redux actions and reducer
│   └── store.js          - Redux store configuration
├── App.css               - Application styles
├── index.css             - Global styles
└── main.jsx              - Entry point
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Usage

### Adding a Task
1. Type your task in the input field
2. Click "Add Task" or press Enter
3. Task appears in the list with a "pending" status

### Changing Task Status
1. Click the status dropdown on any task
2. Select from: Pending, In Progress, or Completed
3. Status updates immediately in Redux store

### Deleting a Task
1. Click the "Delete" button on any task
2. Task is removed from the list

## Redux Architecture

### Actions
- `addTask(task)` - Add a new task to the list
- `deleteTask(id)` - Remove a task by ID
- `changeStatus(id, status)` - Update task status

### Reducer
The `todoReducer` handles all state updates with the following initial state:
```javascript
{
  tasks: []
}
```

Each task object contains:
- `id` - Unique identifier (UUID)
- `text` - Task description
- `status` - Current status (pending, in-progress, completed)
- `createdAt` - Creation timestamp

## Future Enhancements

- Task due dates and priorities
- Task categories/tags
- Local storage persistence
- Task filtering by status
- Dark mode support
- Task search functionality

## License

MIT
