import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import React from 'react';

const MainPage = lazy(() => import('../../pages/main.page'));
const LoginPage = lazy(() => import('../../pages/login.page'));
// const RegisterPage = lazy(() => import('../../pages/register.page'));
const EditListPage = lazy(() => import('../../pages/edit.page'));
const ErrorPage = lazy(() => import('../../pages/error.page'));
export const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/main" element={<MainPage></MainPage>}></Route>
      {/* <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/create" element={<CreateListPage></CreateListPage>}></Route> */}
      <Route
        path="/editpage/:id"
        element={<EditListPage></EditListPage>}
        // ></Route>
        // <Route path="/mylists" element={<MyListsPage></MyListsPage>}></Route>
      ></Route>
      <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </Suspense>
);
