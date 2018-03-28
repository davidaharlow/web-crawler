import React from 'react';
import ReactDOM from 'react-dom';
import ResultsListEntry from './ResultsListEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const result = 'Test Result';
  ReactDOM.render(<ResultsListEntry result={result} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
