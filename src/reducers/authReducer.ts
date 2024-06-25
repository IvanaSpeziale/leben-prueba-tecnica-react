import { AnyAction } from 'redux';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
};

const authReducer = (state = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case 'auth/setToken':
      return {
        ...state,
        token: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'auth/setLoading':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
