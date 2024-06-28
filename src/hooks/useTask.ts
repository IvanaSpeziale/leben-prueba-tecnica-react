// Import { useAppDispatch, useAppSelector } from './hook';
// import { RootState } from '../store';
// import {
//   getTasks,
//   addTask,
//   deleteTask,
//   updateTask,
// } from '../actions/taskActions';

// const useTasks = () => {
//   const dispatch = useAppDispatch();
//   const { tasks, loading } = useAppSelector((state: RootState) => state.tasks);

//   const fetchTasks = async () => {
//     try {
//       await dispatch(getTasks());
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const addNewTask = async (taskData: any) => {
//     try {
//       await dispatch(addTask(taskData));
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   const removeTask = async (taskId: string) => {
//     try {
//       await dispatch(deleteTask(taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const updateExistingTask = async (taskData: any) => {
//     try {
//       await dispatch(updateTask(taskData));
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   return {
//     tasks,
//     loading,
//     fetchTasks,
//     addNewTask,
//     removeTask,
//     updateExistingTask,
//   };
// };

// export default useTasks;
