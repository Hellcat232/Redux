import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;

export const selectStatusFilter = (state) => state.filters.status;

export const selectError = (state) => state.tasks.error;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilters) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilters) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  //   const tasks = selectTasks(state);
  console.log("select task");
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
