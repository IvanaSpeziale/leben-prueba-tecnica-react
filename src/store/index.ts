import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import taskReducer from '../reducers/taskReducer';

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
