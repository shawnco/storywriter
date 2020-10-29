import Request from './../request';
import { GET_ALL_SCENE } from './scene';

export const GET_ALL_SETTING = 'get_all_setting';
export const GET_SETTING = 'get_setting';
export const CREATE_SETTING = 'create_setting';
export const UPDATE_SETTING = 'update_setting';
export const DELETE_SETTING = 'delete_setting';

export function getAllSetting() {
    return dispatch => {
        Request.get('setting/list').then(res => {
            dispatch({
                type: GET_ALL_SETTING,
                payload: res.data
            });
        });
    }
}

export function getSettingsBySeries(id) {
    return dispatch => {
        Request.get(`series/${id}/settings`).then(res => {
            dispatch({
                type: GET_ALL_SETTING,
                payload: res.data
            });
        });
    }
}

export function getSettingsByStory(id) {
    return dispatch => {
        Request.get(`story/${id}/settings`).then(res => {
            dispatch({
                type: GET_ALL_SETTING,
                payload: res.data
            });
        });
    }
}

export function getSetting(id) {
    return dispatch => {
        Request.get(`setting/${id}`).then(res => {
            dispatch({
                type: GET_SETTING,
                payload: res.data
            });
        });
    }
}

export function createSetting(data) {
    return dispatch => {
        Request.post('setting', data).then(res => {
            dispatch({
                type: CREATE_SETTING,
                payload: res.data
            });
        });
    }
}

export function updateSetting(id, data) {
    return dispatch => {
        Request.put(`setting/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_SETTING,
                payload: res.data
            });
        });
    }
}

export function deleteSetting(id) {
    return dispatch => {
        Request.del(`setting/${id}`).then(res => {
            dispatch({
                type: DELETE_SETTING,
                payload: res.data
            });
        });
    }
}