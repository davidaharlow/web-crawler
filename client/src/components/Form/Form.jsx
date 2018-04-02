import React from 'react';
import PropTypes from 'prop-types';
import FormElement from '../FormElement/FormElement';
import './Form.less';

const Form = ({ elements }) => (
  <div>
    {
      elements.map(element => <FormElement element={element} key={element} />)
    }
  </div>
);

Form.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
