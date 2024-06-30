import React, { useState } from 'react';
import { Task, StatusCode } from '../../types';
import styles from './taskitem.module.scss';

interface TaskItemProps {
  task: Task;
  onUpdate: (
    taskId: number,
    name: string,
    description: string,
    statusId: StatusCode
  ) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(
    task.description || ''
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = () => {
    onUpdate(task.id!, editedName, editedDescription, task.statusId);
    setIsEditing(false);
  };

  const handleTouch = (e: React.TouchEvent) => {
    // eslint-disable-next-line no-negated-condition
    if (!(e.target as Element).closest(`.${styles.taskItem}`)) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  };

  return (
    <div
      className={`${styles.taskItem} ${isHovered ? styles.hover : ''}`}
      onTouchStart={handleTouch}
    >
      <div className={styles.taskName}>{task.name}</div>
      <div className={styles.taskDescription}>{task.description}</div>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            Editar
          </button>
          <button
            className={`${styles.statusButton} ${styles.inProgressButton}`}
            onClick={() =>
              onUpdate(
                task.id!,
                task.name,
                task.description || '',
                StatusCode.IP
              )
            }
          >
            En proceso
          </button>
          <button
            className={`${styles.statusButton} ${styles.completedButton}`}
            onClick={() =>
              onUpdate(
                task.id!,
                task.name,
                task.description || '',
                StatusCode.FIN
              )
            }
          >
            Finalizado
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
