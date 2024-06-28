import React, { useState } from 'react';
import { Task, StatusCode } from '../../types';

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

  const handleSave = () => {
    onUpdate(task.id!, editedName, editedDescription, task.statusId);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
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
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() =>
              onUpdate(
                task.id!,
                task.name,
                task.description || '',
                StatusCode.IP
              )
            }
          >
            In Progress
          </button>
          <button
            onClick={() =>
              onUpdate(
                task.id!,
                task.name,
                task.description || '',
                StatusCode.FIN
              )
            }
          >
            Completed
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
