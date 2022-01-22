import { NOTIFICATION } from '../constant';
const NotificationReducers = (state = [], action) => {
  switch (action.type) {
  case NOTIFICATION.NOTIFICATION_SUCCESS :
    return { isOpen: true, message: action.message, type: 'success' };
  case NOTIFICATION.NOTIFICATION_FAILED :
    return { isOpen: true, message: action.message, type: 'error' };
  case NOTIFICATION.CLOSE_NOTIFICATION :
    return { isOpen: false };
  case NOTIFICATION.NOTIFICATION_TIMEOUT :
    return { isOpen: true, message: 'System failure', type: 'error' };
  default:
    return state;
  }
};
 export default NotificationReducers;
