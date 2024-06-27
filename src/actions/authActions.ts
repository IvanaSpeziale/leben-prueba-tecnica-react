import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  login as apiLogin,
  register as apiRegister,
} from '../services/authService';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { username, password }: { username: string; password: string },
    thunkAPI
  ) => {
    try {
      const { token }: { token: string } = await apiLogin(username, password);
      return token;
    } catch (error) {
      console.error('Error during login:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    {
      username,
      password,
      email,
    }: { username: string; password: string; email: string },
    thunkAPI
  ) => {
    try {
      await apiRegister(username, password, email);
      return { username };
    } catch (error) {
      console.error('Error during registration:', error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue({ message: error.message });
      }

      return thunkAPI.rejectWithValue({
        message: 'Failed to register, please try again.',
      });
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_) => {
  localStorage.removeItem('token');
  console.log('Logout successful');
});
