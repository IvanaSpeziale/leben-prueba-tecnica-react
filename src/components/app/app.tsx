import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import store from '../../store';
import Login from '../auth/login';
import Tasks from '../tasks/taskList';
import Register from '../auth/register';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div className="App" role="banner">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/assignment" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
