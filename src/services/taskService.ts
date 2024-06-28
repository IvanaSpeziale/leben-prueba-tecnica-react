import axiosInstance from './axiosConfig';

export const fetchTasks = async (token: string | null) => {
  try {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.get('/assignment');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (taskData: any, token: string | null) => {
  try {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.post('/assignment', taskData);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: number, token: string | null) => {
  try {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.delete(`/assignment/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
    throw error;
  }
};

export const updateTask = async (taskData: any, token: string | null) => {
  try {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.put(
      `/assignment/${taskData.id}`,
      taskData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${taskData.id}:`, error);
    throw error;
  }
};
