interface TaskState {
  tasks: any[];
  loading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
};

const taskReducer = (state = initialState, action: any): TaskState => {
  switch (action.type) {
    case 'TASKS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
