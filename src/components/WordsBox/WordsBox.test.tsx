import React from 'react';
import ReactDOM from 'react-dom';
import WordsBox from './WordsBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordsBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});