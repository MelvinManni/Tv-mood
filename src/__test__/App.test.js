import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

it('It renders without crashing ', () => {
  const container = document.createElement('div');
  ReactDom.render(<App />, container);
  ReactDom.unmountComponentAtNode(container);
});
