import axios from 'axios';

const BASE_URL = 'https://api.example.com/tasks'; // Reemplaza con la URL de tu API

// Función para obtener todas las tareas
export const getTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Función para agregar una nueva tarea
export const addTask = async (taskData: any) => {
  try {
    const response = await axios.post(BASE_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Función para eliminar una tarea por su ID
export const deleteTask = async (taskId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
    throw error;
  }
};

// Función para actualizar una tarea
export const updateTask = async (taskData: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/${taskData.id}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${taskData.id}:`, error);
    throw error;
  }
};
