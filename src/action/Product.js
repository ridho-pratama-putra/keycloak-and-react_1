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

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'IN_PROGRESS' });
        const {data} = await api.getProducts().catch(() => {
            setTimeout(() => {
                const progressAction = { type: 'IN_PROGRESS_DONE' };
                dispatch(progressAction);
                const notificationAction = { type: 'NOTIFICATION_TIMEOUT', message: 'Backend down', notificationType: 'error' };
                dispatch(notificationAction);
            }, 3000);
        });

        const action = { type: 'FETCH_ALL_PRODUCTS', payload: data.result };
        dispatch(action);
        const progressAction = { type: 'IN_PROGRESS_DONE' };
        dispatch(progressAction);
    } catch (error) {
        console.log(error);
    }
};

