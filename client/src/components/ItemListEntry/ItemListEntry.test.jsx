import React from 'react';
import ReactDOM from 'react-dom';
import ItemListEntry from './ItemListEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    title: 'item title',
    content: 'item content',
  };
  ReactDOM.render(<ItemListEntry item={item} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
