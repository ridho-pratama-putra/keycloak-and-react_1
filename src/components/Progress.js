import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Backdrop } from '@mui/material';

export default function Progress () {
  const { isInProgress } = useSelector(state => {
    return state.progress;
  });

  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isInProgress}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
