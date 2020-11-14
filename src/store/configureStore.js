import { configureStore } from '@reduxjs/toolkit';

import reducers from './bugs.reduxToolkit';

export default (() => configureStore({ reducer: reducers }))();
