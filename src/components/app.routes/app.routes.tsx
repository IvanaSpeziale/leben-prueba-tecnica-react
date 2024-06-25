// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// const Account = lazy(() => import('./pages/Account'));
// const Assignments = lazy(() => import('./pages/Assignments'));
// const AssignmentDetails = lazy(() => import('./pages/AssignmentDetails'));
// const AssignmentStatus = lazy(() => import('./pages/AssignmentStatus'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));

// const AppRoutes: React.FC = () => {
//   return (
//     <Router>
//       <Suspense fallback={null}>
//         <Route path="/accounts/me" Component={Account} />
//         <Route path="/assignment/:id" Component={AssignmentDetails} />
//         <Route path="/assignment" Component={Assignments} />
//         <Route path="/assignment-status" Component={AssignmentStatus} />
//         <Route path="/login" Component={Login} />
//         <Route path="/signup" Component={Signup} />
//         <Route path="/" Component={Login} />
//       </Suspense>
//     </Router>
//   );
// };

// export default AppRoutes;
