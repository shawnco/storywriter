import Request from './../request';

export const GET_ALL_SERIES = 'get_all_series';
export const GET_SERIES = 'get_series';
export const CREATE_SERIES = 'create_series';
export const UPDATE_SERIES = 'update_series';
export const DELETE_SERIES = 'delete_series';

export function getAllSeries() {
    return dispatch => {
        Request.get('series/list').then(res => {
            dispatch({
                type: GET_ALL_SERIES,
                payload: res.data
            });
        });
    }
}

export function getSeries(id) {
    return dispatch => {
        Request.get(`series/${id}`).then(res => {
            dispatch({
                type: GET_SERIES,
                payload: res.data
            });
        });
    }
}

export function createSeries(data) {
    return dispatch => {
        Request.post('series', data).then(res => {
            dispatch({
                type: CREATE_SERIES,
                payload: res.data
            });
        });
    }
}

export function updateSeries(id, data) {
    return dispatch => {
        Request.put(`series/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_SERIES,
                payload: res.data
            });
        });
    }
}

export function deleteSeries(id) {
    return dispatch => {
        Request.del(`series/${id}`).then(res => {
            dispatch({
                type: DELETE_SERIES,
                payload: res.data
            });
        });
    }
}