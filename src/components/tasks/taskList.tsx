import React from 'react';
import { Task, StatusCode } from '../../types';
import TaskItem from './taskItem';
import styles from './tasklist.module.scss';

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
  <ul className={styles.taskList}>
    {tasks.map((task) => (
      <li key={task.id} className={styles.taskList__item}>
        <TaskItem task={task} onUpdate={onUpdate} />
      </li>
    ))}
  </ul>
);

export default TaskList;
