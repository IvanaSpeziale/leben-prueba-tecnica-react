import React from 'react';
import styles from './taskForm.module.scss';

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
  <div className={styles.taskForm}>
    <div className={styles.inputGroup}>
      <input
        type="text"
        placeholder="Titulo de la tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        className={styles.input}
      />
    </div>
    <button
      type="button"
      onClick={onAddTask}
      className={`${styles.button} ${styles.primary}`}
    >
      Agregar
    </button>
  </div>
);

export default TaskForm;
