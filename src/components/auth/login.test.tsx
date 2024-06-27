import { render, screen } from '@testing-library/react';
import Login from './login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import useAuth from '../../hooks/useAuth';
import React from 'react';

jest.mock('../../hooks/useAuth', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Given Login component', () => {
  test('When login fails, it shows an error message', async () => {
    const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

    mockUseAuth.mockReturnValue({
      login: jest.fn().mockRejectedValue(new Error('Login failed')),
      logout: jest.fn(),
      isLoading: false,
      isAuthenticated: false,
      token: null,
      register: jest.fn().mockResolvedValue(undefined),
    });

    render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Iniciar sesión' });

    await userEvent.type(usernameInput, 'test');
    await userEvent.type(passwordInput, 'test');
    await userEvent.click(loginButton);

    const errorMessage = await screen.findByText(
      'Login failed. Please check your credentials and try again.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
