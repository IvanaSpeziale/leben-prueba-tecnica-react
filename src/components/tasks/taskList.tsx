import React from 'react';
import { Task, StatusCode } from '../../types';
import TaskItem from './taskItem';

interface TaskListProps {
  tasks: Task[];
  onUpdate: (
    taskId: number,
    name: string,
    description: string,
    statusId: StatusCode
  ) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onUpdate={onUpdate} />
    ))}
  </ul>
);

export default TaskList;
