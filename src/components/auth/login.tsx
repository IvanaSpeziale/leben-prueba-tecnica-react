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
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          role="textbox"
        />

        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          role="textbox"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Mostrar contraseña'}
        </button>
        <button type="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Iniciar sesión'}
        </button>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </form>
      {isLoading && <p className={styles.loading}>Loading...</p>}
      {isAuthenticated && (
        <p>
          Welcome! You are logged in.
          <br />
          <button onClick={redirectToRegister}>Go to Register</button>
        </p>
      )}
    </div>
  );
};

export default Login;
