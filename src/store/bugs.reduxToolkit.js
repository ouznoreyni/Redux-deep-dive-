import { createAction, createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

//actions creatore
export const bugAdded = createAction('bugAdded');

export const bugRemoved = createAction('bugRemoved');

export const bugResolved = createAction('bugResolved');

//reducer
let lastId = 0;

const reducers = createReducer([], {
  [bugAdded.type]: (bugs, action) =>
    void bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolve: false,
    }),

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolve = true;
  },
});

export default reducers;
