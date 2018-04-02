import React from 'react';
import PropTypes from 'prop-types';
import './ItemListEntry.less';

const ItemListEntry = ({ item }) => (
  <div>
    <h5>{item.title}</h5>
  </div>
);

ItemListEntry.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default ItemListEntry;
