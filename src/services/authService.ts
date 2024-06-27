import axiosInstance from './axiosConfig';

interface User {
  username: string;
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    const response = await axiosInstance.post('/login', {
      usernameOrEmail: username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error in login:', error);
    throw new Error('Login failed. Please try again.');
  }
};

export const register = async (
  username: string,
  password: string,
  email: string
): Promise<User> => {
  try {
    const response = await axiosInstance.post('/signup', {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Error in sign up', error);
    throw new Error('Failed sign up,please try again');
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post('/logout');
  } catch (error) {
    console.error('Error in logout:', error);
    throw new Error('Logout failed. Please try again.');
  }
};
