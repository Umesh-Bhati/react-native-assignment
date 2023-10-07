import {configureStore} from '@reduxjs/toolkit';
import {threadsReducer} from './threads/threadsSlice';
// ...

export const store = configureStore({
  reducer: {
    threadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
