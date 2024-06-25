import React, { useState, useEffect } from 'react';
import useTasks from '../../hooks/useTask';

const Tasks: React.FC = () => {
  const {
    tasks,
    loading,
    fetchTasks,
    addNewTask,
    removeTask,
    updateExistingTask,
  } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks(); // Cargar las tareas al montar el componente
  }, [fetchTasks]);

  const handleAddTask = async () => {
    try {
      await addNewTask({ title: newTaskTitle }); // Envía los datos necesarios para agregar una tarea
      setNewTaskTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await removeTask(taskId); // Envía el ID de la tarea para eliminarla
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateTask = async (
    taskId: string,
    title: string,
    status: string
  ) => {
    try {
      await updateExistingTask({ id: taskId, title, status }); // Envía los datos de la tarea actualizada
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
        {tasks.map((task: any) => (
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
