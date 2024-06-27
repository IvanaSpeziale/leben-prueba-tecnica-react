// Import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Account = lazy(() => import('./pages/Account'));
// const Assignments = lazy(() => import('./pages/Assignments'));
// const AssignmentDetails = lazy(() => import('./pages/AssignmentDetails'));
// const AssignmentStatus = lazy(() => import('./pages/AssignmentStatus'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));

// const AppRoutes: React.FC = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/accounts/me" element={<Account />} />
//         <Route path="/assignment/:id" element={<AssignmentDetails />} />
//         <Route path="/assignment" element={<Assignments />} />
//         <Route path="/assignment-status" element={<AssignmentStatus />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Login />} />{' '}
//         {/* Add "exact" for home route */}
//       </Routes>
//     </Suspense>
//   </Router>
// );

// export default AppRoutes;
