import React from 'react';
import ReactDom from 'react-dom';
import ErrorPage from '../pages/404/distil';

it('It renders without crashing ', () => {
  const container = document.createElement('div');
  ReactDom.render(<ErrorPage />, container);
  ReactDom.unmountComponentAtNode(container);
});
