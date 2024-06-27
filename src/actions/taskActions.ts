import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from '../types';
import {
  fetchTasks as apiFetchTasks,
  addTask as apiAddTask,
  deleteTask as apiDeleteTask,
  updateTask as apiUpdateTask,
} from '../services/taskService';
import { RootState } from '../store';
import { setAuthToken } from '../services/api';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await apiFetchTasks();
  return response.data;
});

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask: Task, { getState }) => {
    const { auth } = getState() as RootState;
    const { token } = auth;

    try {
      setAuthToken(token);
      const response = await apiAddTask(newTask);
      return response.data;
    } catch (error: any) {
      throw new Error('Error al agregar tarea: ' + error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId: string, { getState }) => {
    const { auth } = getState() as RootState;
    const { token } = auth;

    try {
      setAuthToken(token);
      await apiDeleteTask(taskId);
      return taskId;
    } catch (error: any) {
      throw new Error('Error al eliminar tarea: ' + error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask: Task, { getState }) => {
    const { auth } = getState() as RootState;
    const { token } = auth;

    try {
      setAuthToken(token);
      const response = await apiUpdateTask(updatedTask);
      return response.data;
    } catch (error: any) {
      throw new Error('Error al actualizar tarea: ' + error.message);
    }
  }
);
