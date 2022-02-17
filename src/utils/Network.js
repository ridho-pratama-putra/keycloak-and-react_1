import {NOTIFICATION, PROGRESS} from "../constant";

export const catchNetworkResponse = (e, dispatch) => {
    const {response} = e;
    if (response) {
        return setTimeout(() => {
            const progressAction = {type: PROGRESS.IN_PROGRESS_DONE};
            dispatch(progressAction);
            const notificationAction = {
                type: NOTIFICATION.NOTIFICATION_FAILED,
                message: e.response.status,
            };
            dispatch(notificationAction);
        }, 1000);
    } else {
        setTimeout(() => {
            const progressAction = { type: PROGRESS.IN_PROGRESS_DONE };
            dispatch(progressAction);
            const notificationAction = { type: NOTIFICATION.NOTIFICATION_TIMEOUT, notificationType: 'error' };
            dispatch(notificationAction);
        }, 1000);
    }
};
