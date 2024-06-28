import React from 'react';

interface TaskFormProps {
  newTaskName: string;
  setNewTaskName: (name: string) => void;
  newTaskDescription: string;
  setNewTaskDescription: (description: string) => void;
  onAddTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  newTaskName,
  setNewTaskName,
  newTaskDescription,
  setNewTaskDescription,
  onAddTask,
}) => (
  <div>
    <input
      type="text"
      placeholder="New Task Name"
      value={newTaskName}
      onChange={(e) => setNewTaskName(e.target.value)}
    />
    <input
      type="text"
      placeholder="New Task Description"
      value={newTaskDescription}
      onChange={(e) => setNewTaskDescription(e.target.value)}
    />
    <button type="button" onClick={onAddTask}>
      Add Task
    </button>
  </div>
);

export default TaskForm;
