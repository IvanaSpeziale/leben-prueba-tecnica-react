import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTasks as apiGetTasks,
  addTask as apiAddTask,
  deleteTask as apiDeleteTask,
  updateTask as apiUpdateTask,
} from '../services/taskService';

// Tipo para los datos de una tarea
interface TaskData {
  id: string;
  title: string;
  description: string;
}

// Acción asíncrona para obtener tareas
export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (_, thunkAPI) => {
    try {
      const tasks = await apiGetTasks();
      return tasks;
    } catch (error) {
      console.error('Error getting tasks:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Acción asíncrona para agregar una tarea
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (taskData: TaskData, thunkAPI) => {
    try {
      const newTask = await apiAddTask(taskData);
      return newTask;
    } catch (error) {
      console.error('Error adding task:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Acción asíncrona para eliminar una tarea
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId: string, thunkAPI) => {
    try {
      await apiDeleteTask(taskId);
      return taskId;
    } catch (error) {
      console.error('Error deleting task:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Acción asíncrona para actualizar una tarea
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (taskData: TaskData, thunkAPI) => {
    try {
      const updatedTask = await apiUpdateTask(taskData);
      return updatedTask;
    } catch (error) {
      console.error('Error updating task:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Acción síncrona para acciones adicionales relacionadas con las tareas (por ejemplo, marcar tarea como completada)
export const markTaskCompleted = (taskId: string) => ({
  type: 'tasks/markTaskCompleted',
  payload: taskId,
});

// Acción síncrona para limpiar las tareas en el estado (por ejemplo, al cerrar sesión)
export const clearTasks = () => ({
  type: 'tasks/clearTasks',
});
