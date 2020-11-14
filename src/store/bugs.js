//actions types
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVE = 'bugResolved';

//actions creatore
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: { description },
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: { id },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVE,
  payload: { id },
});

//reducer
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    case BUG_RESOLVE:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true },
      );
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}

export default reducer;
