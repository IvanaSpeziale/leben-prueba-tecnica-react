import { useAppDispatch, useAppSelector } from './hook';
import { RootState } from '../store';
import { loginUser, registerUser, logoutUser } from '../actions/authActions';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, token } = useAppSelector(
    (state: RootState) => state.auth
  );

  const login = async (username: string, password: string) => {
    try {
      await dispatch(loginUser({ username, password }));
    } catch (error) {
      console.error('Error during login', error);
      throw error;
    }
  };

  const register = async (username: string, password: string) => {
    try {
      await dispatch(registerUser({ username, password }));
    } catch (error) {
      console.error('Error during registration', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error('Error during logout', error);
      throw error;
    }
  };

  return {
    isAuthenticated,
    isLoading,
    token,
    login,
    register,
    logout,
  };
};

export default useAuth;
