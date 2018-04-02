import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const elements = ['title', 'description', 'director'];
  ReactDOM.render(<Form elements={elements} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
