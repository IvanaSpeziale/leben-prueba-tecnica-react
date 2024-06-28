import React from 'react';
import { StatusCode } from '../../types';
import { useTask } from '../../hooks/useTask';
import TaskList from './taskList';
import TaskForm from './taskForm';

const TasksContainer: React.FC = () => {
  const {
    handleAddTask,
    handleUpdateTask,
    tasks,
    loading,
    newTaskName,
    setNewTaskName,
    newTaskDescription,
    setNewTaskDescription,
  } = useTask();

  const tasksNS = tasks.filter((task) => task.statusId === StatusCode.NS);
  const tasksIP = tasks.filter((task) => task.statusId === StatusCode.IP);
  const tasksFIN = tasks.filter((task) => task.statusId === StatusCode.FIN);

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
        onAddTask={handleAddTask}
      />
      {loading && <p>Loading...</p>}
      <div>
        <h2>Not Started</h2>
        <TaskList tasks={tasksNS} onUpdate={handleUpdateTask} />
      </div>
      <div>
        <h2>In Progress</h2>
        <TaskList tasks={tasksIP} onUpdate={handleUpdateTask} />
      </div>
      <div>
        <h2>Completed</h2>
        <TaskList tasks={tasksFIN} onUpdate={handleUpdateTask} />
      </div>
    </div>
  );
};

export default TasksContainer;
