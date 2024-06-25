export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'not_started' | 'in_progress' | 'completed';
}

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: {
    id: number;
    username: string;
    email: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  tasks: Task[];
}
