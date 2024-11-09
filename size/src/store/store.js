import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './reducers';

const store = configureStore({
  reducer: {
    size: sizeReducer,
  },
});

export default store;
