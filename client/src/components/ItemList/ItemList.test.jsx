import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const items = [
    {
      id: 1,
      title: 'first title',
      content: 'first content',
    },
    {
      id: 2,
      title: 'second title',
      content: 'second content',
    },
  ];
  ReactDOM.render(<ItemList items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
