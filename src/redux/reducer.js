import { statusFilters } from "./constants";
import {
  addTask,
  toggleCompleted,
  deleteTask,
  setStatusFilter,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter((task) => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      });
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

// export const filtersReducer = (state = filtersInitialState, action) => {
//   return state;
// };

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});
