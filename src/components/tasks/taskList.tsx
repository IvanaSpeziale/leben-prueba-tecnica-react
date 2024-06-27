import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from '../../actions/taskActions';
import { Task } from '../../types';

const Tasks: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch, fetchTasks]);

  const handleAddTask = async () => {
    try {
      await dispatch(
        addTask({
          id: '1',
          title: newTaskTitle,
          description: '',
          status: 'not_started',
        })
      );
      setNewTaskTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateTask = async (
    taskId: string,
    title: string,
    status: 'not_started' | 'in_progress' | 'completed'
  ) => {
    try {
      await dispatch(
        updateTask({ id: taskId, title, description: '', status })
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="New Task Title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() =>
                handleUpdateTask(task.id, task.title, 'in_progress')
              }
            >
              In Progress
            </button>
            <button
              onClick={() => handleUpdateTask(task.id, task.title, 'completed')}
            >
              Completed
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
