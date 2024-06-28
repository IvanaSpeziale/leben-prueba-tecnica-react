import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchTasks as apiFetchTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
} from '../services/taskService';
import { RootState } from '../store';
import { Task } from '../types';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    const { token } = auth;

    try {
      const response = await apiFetchTasks(token);
      return response;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask: Task, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    const { token } = auth;

    try {
      const response = await apiAddTask(newTask, token);
      return response;
    } catch (error) {
      console.error('Error adding task:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask: Task, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;
    const { token } = auth;

    try {
      const response = await apiUpdateTask(updatedTask, token);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
