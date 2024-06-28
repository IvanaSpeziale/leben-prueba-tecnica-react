import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import styles from './register.module.scss';

const Register: React.FC = () => {
  const { register, isLoading } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validar campos vacíos
    if (!username.trim() || !password.trim() || !email.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      await register(username, password, email);
      setError(null);
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button
          type="button"
          onClick={handleRegister}
          disabled={isLoading}
          className={`${styles.button} ${styles.primary}`}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {isLoading && <p className={styles.loading}>Loading...</p>}
    </div>
  );
};

export default Register;
