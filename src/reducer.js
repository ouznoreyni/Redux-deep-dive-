import * as actions from './actionTypes';

let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    case actions.BUG_RESOLVE:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true },
      );
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}

export default reducer;
