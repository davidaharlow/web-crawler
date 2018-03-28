import React from 'react';
import './ResultsList.css';
import ResultsListEntry from '../ResultsListEntry/ResultsListEntry';

const ResultsList = ({ results }) => (
  <div>
    {
      results.map(result => <ResultsListEntry result={result} />)
    }
  </div>
);

export default ResultsList;
