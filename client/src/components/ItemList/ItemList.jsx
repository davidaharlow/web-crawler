import React from 'react';
import PropTypes from 'prop-types';
import ItemListEntry from '../ItemListEntry/ItemListEntry';
import './ItemList.less';

const ItemList = ({ items }) => (
  <div>
    {
      items.map(item => <ItemListEntry item={item} key={item.id} />)
    }
  </div>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
