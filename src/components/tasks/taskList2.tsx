// Import React from 'react';
// import { StatusCode, Task } from '../../types';
// import { useTask } from '../../hooks/useTask';

// const Tasks: React.FC = () => {
//   const {
//     handleAddTask,
//     handleUpdateTask,
//     tasks,
//     loading,
//     newTaskName,
//     setNewTaskName,
//   } = useTask();

//   const tasksNS = [];
//   const tasksFIN = [];
//   const tasksIP = [];

//   tasks.forEach((task) => {
//     if (task.statusId === StatusCode.NS) {
//       tasksNS.push(task);
//     } else if (task.statusId === StatusCode.FIN) {
//       tasksFIN.push(task);
//     } else if (task.statusId === StatusCode.IP) {
//       tasksIP.push(task);
//     }
//   });

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <input
//         type="text"
//         placeholder="New Task Name"
//         value={newTaskName}
//         onChange={(e) => setNewTaskName(e.target.value)}
//       />
//       <button type="button" onClick={handleAddTask}>
//         Add Task
//       </button>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {tasks.map((task: Task) => (
//           <li key={task.id}>
//             {task.name}
//             <button
//               onClick={() =>
//                 handleUpdateTask(task.id!, task.name, StatusCode.IP)
//               }
//             >
//               In Progress
//             </button>
//             <button
//               onClick={() =>
//                 handleUpdateTask(task.id!, task.name, StatusCode.FIN)
//               }
//             >
//               Completed
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Tasks;
