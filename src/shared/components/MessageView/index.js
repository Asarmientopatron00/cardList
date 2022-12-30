import React, {useEffect, useState} from 'react';
import {
  CheckCircle,
  Error,
  Info,
  Close,
  Warning
} from '@mui/icons-material';
import {
  IconButton,
  SnackbarContent,
  Snackbar,
} from '@mui/material';
import { amber, green } from '@mui/material/colors';

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: Error,
  info: Info,
};

const snackStyles = {
  success: {
    backgroundColor: green[600],
    width: '95vw',
  },
  error: {
    backgroundColor: '#A71200',
    width: '95vw',
  },
  info: {
    backgroundColor: 'yellow',
    width: '95vw',
  },
  warning: {
    backgroundColor: amber[700],
    width: '95vw',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: '20px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
};

const AppSnackbar = (props) => {
  const [open, setOpen] = useState(false);
  const {className, message, variant, ...other} = props;
  const Icon = variantIcon[variant];

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message, variant]); // eslint-disable-line 

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      sx={{width: '95%'}}
      autoHideDuration={4000}
      onClose={onClose}>
      <SnackbarContent
        style={{width: '100%'}}
        sx={snackStyles[variant]}
        aria-describedby='client-snackbar'
        message={
          <span id='client-snackbar' style={snackStyles.message}>
            <Icon sx={{...snackStyles.icon, ...snackStyles.iconVariant}} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={onClose}>
            <Close sx={snackStyles.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    </Snackbar>
  );
};

export default AppSnackbar;
