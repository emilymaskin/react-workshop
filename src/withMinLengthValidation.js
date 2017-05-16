import React from 'react';

const withMinLengthValidation = (Component, length) => {
  return (props) => {
    const {
      value,
      onChange,
    } = props;

    const valueLength = value.toString().length;

    return (
      <div>
        <Component {...props} />
        {valueLength < length && <span>Minimum {length} required.</span>}
      </div>
    );
  }
}

export default withMinLengthValidation;
