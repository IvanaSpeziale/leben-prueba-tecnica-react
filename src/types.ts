export interface Status {
  id: number;
  code: string;
  description: string;
  isActive: boolean;
}

export interface Task {
  id?: number;
  name: string;
  description: string;
  statusId: number;
  isActive?: boolean;

  status?: Status;
}

export enum StatusCode {
  NS = 1,
  IP = 2,
  FIN = 3,
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
