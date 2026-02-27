// Action Types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_STATUS = 'CHANGE_STATUS';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const changeStatus = (id, status) => ({
  type: CHANGE_STATUS,
  payload: { id, status },
});

// Initial State
const initialState = {
  tasks: [],
};

// Reducer
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case CHANGE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      };
    default:
      return state;
  }
};
