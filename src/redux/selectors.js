export const getTasks = (state) => state.tasks.items;

export const getStatusFilter = (state) => state.filters.status;

export const getError = (state) => state.tasks.error;

export const getIsLoading = (state) => state.tasks.isLoading;
