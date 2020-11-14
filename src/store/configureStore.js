import { configureStore } from '@reduxjs/toolkit';

//import reducers from './bugs.reduxToolkit';
//export default (() => configureStore({ reducer: reducers }))();

import reducer from './bug.slice';
export default (() => configureStore({ reducer }))();
