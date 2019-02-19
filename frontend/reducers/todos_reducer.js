import {RECEIVE_TODO} from '../actions/todo_actions.js';

import {RECEIVE_TODOS} from '../actions/todo_actions.js';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};



const todosReducer = (state = initialState , action) => {
  switch(action.type) {
    case (RECEIVE_TODOS):
      const newState = {};
      action.todos.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;
    case (RECEIVE_TODO):
       let deepCopy = merge({},state);
       deepCopy[action.todo.id] = action.todo;
       return deepCopy;
    default:
      return state;
  }
};

export default todosReducer;