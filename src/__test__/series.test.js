import React from 'react';
import ReactDom from 'react-dom';
import Series from '../pages/series/distil';
import store from '../redux/store/store';
import { Provider } from 'react-redux';

it('It renders without crashing ', () => {
  const container = document.createElement('div');
  ReactDom.render(
    <Provider store={store}>
      <Series />
    </Provider>,
    container
  );
});
