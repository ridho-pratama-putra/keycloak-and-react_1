import * as api from '../api/Product';
import {NOTIFICATION, PROGRESS} from "../constant";
import {catchNetworkResponse} from "../utils/Network";

export const createProduct = product => {
    return async (dispatch) => {
        const progressAction = {type: PROGRESS.IN_PROGRESS};
        dispatch(progressAction);
        try {
            await api.createProduct(product).then(res => {
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
