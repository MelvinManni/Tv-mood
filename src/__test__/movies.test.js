import React from 'react';
import ReactDom from 'react-dom';
import Movies from '../pages/movies/distil';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

it('It renders without crashing ', () => {
  const container = document.createElement('div');
  ReactDom.render(
    <Provider store={store}>
      <Movies />
    </Provider>,
    container
  );
});
