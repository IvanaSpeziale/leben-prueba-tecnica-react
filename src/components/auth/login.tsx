import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { login, logout, isLoading, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      await login(username, password);
      setError(null);
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setError(null);
    } catch (error) {
      setError('Logout failed. Please try again.');
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form role="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          role="textbox"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="textbox"
        />
        <button type="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Iniciar sesión'}
        </button>
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
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
