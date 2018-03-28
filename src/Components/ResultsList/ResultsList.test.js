import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const results = ['result1', 'result2'];
  ReactDOM.render(<ResultsList results={results} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
