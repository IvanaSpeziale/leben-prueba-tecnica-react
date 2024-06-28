import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from '../../actions/taskActions';
import { StatusCode, Task } from '../../types';
const Tasks: React.FC = () => {
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

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="New Task Name"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            {task.name}
            <button
              onClick={() =>
                handleUpdateTask(task.id!, task.name, StatusCode.IP)
              }
            >
              In Progress
            </button>
            <button
              onClick={() =>
                handleUpdateTask(task.id!, task.name, StatusCode.FIN)
              }
            >
              Completed
            </button>
            <button onClick={() => handleDeleteTask(task.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
