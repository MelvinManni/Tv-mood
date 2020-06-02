import * as actionType from './../types/types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_IS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actionType.FETCH_IS_SUCCESSFUL:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };

    case actionType.FETCH_IS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
