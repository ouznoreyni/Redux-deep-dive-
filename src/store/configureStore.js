import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs.reduxToolkit';
export default (() => configureStore({ reducer }))();
