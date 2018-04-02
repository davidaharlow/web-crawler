import React from 'react';
import ReactDOM from 'react-dom';
import FormConfirmation from './FormConfirmation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // const elements = [
  //   {
  //     title: 'The Machinist',
  //     description: 'An industrial worker who hasn\u0027t slept in a year begins to doubt his own sanity.',
  //     director: 'Brad Anderson',
  //   },
  //   {
  //     title: 'The Incredibles',
  //     description: 'A family of undercover superheroes, whiletrying to live the quiet suburban life, are forced into action to save the world.',
  //     director: 'Brad Bird',
  //   },
  // ].map(element => JSON.stringify(element));

  ReactDOM.render(<FormConfirmation />, div);
  // ReactDOM.render(<FormConfirmation elements={elements} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
