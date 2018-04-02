import React from 'react';
import ReactDOM from 'react-dom';
import FormElement from './FormElement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = 'title';
  ReactDOM.render(<FormElement element={element} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
