import { PROGRESS } from '../constant';

const ProgressReducers = (state = false, action) => {
  switch (action.type) {
  case PROGRESS.IN_PROGRESS :
    return { isInProgress: true };
  case PROGRESS.IN_PROGRESS_DONE :
    return { isInProgress: false };
  default:
    return { isInProgress: false };
  }
};
export default ProgressReducers;
