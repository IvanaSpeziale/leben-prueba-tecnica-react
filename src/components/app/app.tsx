import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Login from '../auth/login';
import Tasks from '../tasks/taskList';
import Register from '../auth/resgister';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
