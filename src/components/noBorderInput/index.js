import React from 'react';
import { InputBase } from '@material-ui/core';
import { useField } from 'formik';

const NoBorderInput = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <InputBase {...configTextfield} size="small" />
  );
};

export default NoBorderInput;