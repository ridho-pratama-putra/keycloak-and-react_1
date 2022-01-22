import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import {NOTIFICATION} from "../constant";

export default function Notification () {
  const dispatch = useDispatch();
  const handleOnClose = (event, reason) => {
    const action = { type: NOTIFICATION.CLOSE_NOTIFICATION };
    dispatch(action);
  };

  const { isOpen, message, type } = useSelector(state => {
    return state.notification;
  });

  return (
    <Snackbar
      open={isOpen}
      onClose={handleOnClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={type} onClose={handleOnClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
