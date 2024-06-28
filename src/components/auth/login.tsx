import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import styles from './login.module.scss';

const Login: React.FC = () => {
  const { login, logout, isLoading, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validar campos vacíos
    if (!username.trim() || !password.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      await login(username, password);
      setError(null);
      navigate('/assignment');
    } catch (error) {
      setError('Login failed. Please try again.');
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

  const redirectToRegister = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form
        role="form"
        onSubmit={(e) => e.preventDefault()}
        className={styles.form}
      >
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          role="textbox"
        />
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="textbox"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show Password'}
        </button>
        <button type="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {!isAuthenticated && ( // Mostrar el botón de registro solo si no está autenticado
          <button type="button" onClick={redirectToRegister}>
            Register
          </button>
        )}
        {isAuthenticated && (
          <div>
            <p>Welcome! You are logged in.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </form>
      {isLoading && <p className={styles.loading}>Loading...</p>}
    </div>
  );
};

export default Login;
