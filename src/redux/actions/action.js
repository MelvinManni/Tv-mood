import * as actionType from './../types/types';

export const fetchRequest = () => ({
  type: actionType.FETCH_IS_REQUESTED,
});

export const fetchSuccess = (data) => ({
  type: actionType.FETCH_IS_SUCCESSFUL,
  payload: data,
});

export const fetchFailed = (error) => ({
  type: actionType.FETCH_IS_FAILED,
  payload: error,
});
