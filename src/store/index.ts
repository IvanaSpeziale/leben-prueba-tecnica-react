import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../store/authSlice';
import taskReducer from '../store/tasksSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
