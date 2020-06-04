import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/home/distil';

it('It renders without crashing ', () => {
  const container = document.createElement('div');
  ReactDom.render(<Home />, container);
  ReactDom.unmountComponentAtNode(container);
});
