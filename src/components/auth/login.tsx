import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { login, logout, isLoading, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isAuthenticated && <p>Welcome!</p>}
    </div>
  );
};

export default Login;
