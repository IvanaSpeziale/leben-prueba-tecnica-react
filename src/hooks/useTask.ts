import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchTasks, addTask, updateTask } from '../actions/taskActions';
import { StatusCode } from '../types';

export const useTask = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks = [], loading } = useSelector(
    (state: RootState) => state.tasks
  );
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

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
      setNewTaskDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (
    taskId: number,
    name: string,
    description: string,
    status: number
  ) => {
    try {
      await dispatch(
        updateTask({ id: taskId, name, description, statusId: status })
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleSave = (
    taskId: number,
    editedName: string,
    editedDescription: string,
    statusId: number
  ) => {
    handleUpdateTask(taskId, editedName, editedDescription, statusId);
  };

  return {
    handleAddTask,
    handleUpdateTask,
    handleSave,
    tasks,
    loading,
    newTaskName,
    setNewTaskName,
    newTaskDescription,
    setNewTaskDescription,
  };
};
