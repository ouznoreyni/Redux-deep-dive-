import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdd: (bugs, action) =>
      void bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      }),
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolve = true;
    },
  },
});

export const { bugAdd, bugResolved } = slice.actions;
export default slice.reducer;
