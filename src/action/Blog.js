import * as api from '../api/Blog';
import {NOTIFICATION, PROGRESS} from "../constant";
import {catchNetworkResponse} from "../utils/Network";

export const getBlog = () => {
    return async (dispatch) => {
        const progressAction = {type: PROGRESS.IN_PROGRESS};
        dispatch(progressAction);
        try {
            await api.getBlog().then(res => {
                setTimeout(() => {
                    dispatch({type: PROGRESS.IN_PROGRESS_DONE});
                    dispatch({type: NOTIFICATION.NOTIFICATION_SUCCESS, message:res.data.status.description})
                }, 100);
            })
        } catch (e) {
            catchNetworkResponse(e, dispatch)
        }
    }
}
