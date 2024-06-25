import axiosInstance from './axiosConfig';

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get('/assignment');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (taskData: any) => {
  try {
    const response = await axiosInstance.post('/assignment', taskData);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosInstance.delete(`/assignment/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
    throw error;
  }
};

export const updateTask = async (taskData: any) => {
  try {
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
