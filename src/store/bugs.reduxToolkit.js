import { createAction } from '@reduxjs/toolkit';

//actions creatore
export const bugAdded = createAction('bugAdded');

export const bugRemoved = createAction('bugRemoved');

export const bugResolved = createAction('bugResolved');

//reducer
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true },
      );
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}

export default reducer;
