import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from '../actions/taskActions';
import { StatusCode } from '../types';
export const useTask = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks = [], loading } = useSelector(
    (state: RootState) => state.tasks
  );
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleAddTask = async () => {
    try {
      await dispatch(
        addTask({
          name: newTaskName,
          description: '',
          statusId: StatusCode.NS,
        })
      );
      setNewTaskName('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      await dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateTask = async (
    taskId: number,
    name: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateTask({ id: taskId, name, description: '', statusId: status })
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
    tasks,
    loading,
    newTaskName,
    setNewTaskName,
  };
};
