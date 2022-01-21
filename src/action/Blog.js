import * as api from '../api/Blog';

export const getBlog = () => {
    // const progressAction = {type: 'IN_PROGRESS'};
    // dispatch(progressAction);
    return async (dispatch) => {
        const progressAction = {type: 'IN_PROGRESS'};
        dispatch(progressAction);
        try {
            await api.getBlog().then(res => {
                // dispatch({type: 'NOTIFICATION_SUCCESS', message:res.data.status.description})
                console.log('sukses ih :', res)
            })
            console.log('sukses ih :')

        } catch (e) {
            console.log('kena catsh ih : ', e)
        }
    }
}
