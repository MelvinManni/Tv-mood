import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import reducer from './../reducer/reducer'
import * as action from './../actions/action'


export const fetch = () => {
  return function (dispatch) {
    dispatch(action.fetchRequest());
    Axios.get(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    )
      .then((res) => {
        const data = res.data;
        dispatch(action.fetchSuccess(data));
      })
      .catch((err) => {
        dispatch(action.fetchFailed(err.message));
      });
  };
};

const store = createStore(reducer , applyMiddleware(thunk));

export default store;
