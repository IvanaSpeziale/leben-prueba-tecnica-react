import React from 'react';
import { StatusCode } from '../../types';
import { useTask } from '../../hooks/useTask';
import TaskList from './taskList';
import TaskForm from './taskForm';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './taskcontainer.module.scss';

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

  const { logout } = useAuth();
  const navigate = useNavigate();

  const tasksNS = tasks.filter((task) => task.statusId === StatusCode.NS);
  const tasksIP = tasks.filter((task) => task.statusId === StatusCode.IP);
  const tasksFIN = tasks.filter((task) => task.statusId === StatusCode.FIN);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles['indie-flower-regular']}`}>Lista de tareas</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </header>
      <h1 className={styles.heading}>Agregar tarea</h1>
      <TaskForm
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
        onAddTask={handleAddTask}
      />
      {loading && <p>Loading...</p>}
      <div className={styles.taskGroups}>
        <div className={styles.taskGroup}>
          <h2 className={styles.groupHeading}>Sin iniciar</h2>
          <TaskList tasks={tasksNS} onUpdate={handleUpdateTask} />
        </div>
        <div className={styles.taskGroup}>
          <h2 className={styles.groupHeading}>En proceso</h2>
          <TaskList tasks={tasksIP} onUpdate={handleUpdateTask} />
        </div>
        <div className={styles.taskGroup}>
          <h2 className={styles.groupHeading}>Finalizada</h2>
          <TaskList tasks={tasksFIN} onUpdate={handleUpdateTask} />
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
