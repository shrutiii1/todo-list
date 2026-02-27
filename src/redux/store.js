import { createStore, combineReducers } from 'redux';
import { todoReducer } from './todoSlice';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(rootReducer);
