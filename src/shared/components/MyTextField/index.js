import React from 'react';
import TextField from '@mui/material/TextField';
import {useField} from 'formik';
import { mainStyles } from '../../styles/mainStyles';

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  const { onBlur } = props;
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      sx={mainStyles.myTextField}
      variant='outlined'
      helperText={errorText}
      error={!!errorText}
      onBlur={onBlur}
    />
  );
};

export default MyTextField;
