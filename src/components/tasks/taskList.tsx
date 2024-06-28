import React from 'react';
import { StatusCode, Task } from '../../types';
import { useTask } from '../../hooks/useTask';

const Tasks: React.FC = () => {
  const {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
    tasks,
    loading,
    newTaskName,
    setNewTaskName,
  } = useTask();

  // Const tasksNS = tasks.filter((item) => item.statusId === StatusCode.NS);
  // const tasksIP = tasks.filter((item) => item.statusId === StatusCode.IP);
  // const tasksFIN = tasks.filter((item) => item.statusId === StatusCode.FIN);

  const tasksNS = [];
  const tasksFIN = [];
  const tasksIP = [];

  tasks.map((task) => {
    if (task.statusId === StatusCode.NS) {
      tasksNS.push(task);
    } else if (task.statusId === StatusCode.FIN) {
      tasksFIN.push(task);
    } else if (task.statusId === StatusCode.IP) {
      tasksIP.push(task);
    }
  });

  return (
    <div>
      <h1>Tasks</h1>
      ////////////////////
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
      ////////////////////
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
