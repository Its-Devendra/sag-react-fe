import React from 'react';
import Form from 'react-bootstrap/Form';
import './Checkbox.css';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <Form.Check>
      <Form.Check.Input
        className="sag-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={`checkbox-${label}`}
      />
      <Form.Check.Label
        className="sag-checkbox__label"
        htmlFor={`checkbox-${label}`}
      >
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  checked: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
};

export default Checkbox;
