import React from 'react';
import PropTypes from 'prop-types';
import './FormElement.less';

const FormElement = ({ element }) => (
  <div>
    <h5>{element}</h5>
  </div>
);

FormElement.propTypes = {
  element: PropTypes.string.isRequired,
};

export default FormElement;
