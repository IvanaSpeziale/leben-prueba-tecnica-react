import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Login from '../auth/login';
import Register from '../auth/register';
import TasksContainer from '../tasks/taskContainer';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div className="App" role="banner">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/assignment" element={<TasksContainer />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
