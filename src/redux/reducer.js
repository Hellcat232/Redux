import { statusFilters } from "./constants";
import { addTask, toggleCompleted, deleteTask } from "./actions";

const tasksInitialState = [];

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];

    case deleteTask.type:
      return state.filter((task) => task.id !== action.payload);

    case toggleCompleted.type:
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  return state;
};
