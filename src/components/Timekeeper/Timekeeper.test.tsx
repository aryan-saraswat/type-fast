import React from 'react';
import ReactDOM from 'react-dom';
import Timekeeper from './Timekeeper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Timekeeper />, div);
  ReactDOM.unmountComponentAtNode(div);
});