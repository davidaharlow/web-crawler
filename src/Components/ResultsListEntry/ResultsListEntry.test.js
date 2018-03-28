import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsListEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultsListEntry />, div);
  ReactDOM.unmountComponentAtNode(div);
});
