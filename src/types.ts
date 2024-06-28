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
  // CreatedBy?: string;
  // createdAt?: string; // Or Date if you prefer to parse it as a Date object
  // updatedBy?: string | null;
  // updatedAt?: string | null; // Or Date if you prefer to parse it as a Date object
  status?: Status;
  // User?: any | null; // Adjust this if you have a specific type for 'user', otherwise leave it as any
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
