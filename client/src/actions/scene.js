import Request from './../request';

export const GET_ALL_SCENE = 'get_all_scene';
export const GET_SCENE = 'get_scene';
export const CREATE_SCENE = 'create_scene';
export const UPDATE_SCENE = 'update_scene';
export const DELETE_SCENE = 'delete_scene';

export function getAllScene() {
    return dispatch => {
        Request.get('scene/list').then(res => {
            dispatch({
                type: GET_ALL_SCENE,
                payload: res.data
            });
        });
    }
}

export function getScenesBySeries(id) {
    return dispatch => {
        Request.get(`series/${id}/scenes`).then(res => {
            dispatch({
                type: GET_ALL_SCENE,
                payload: res.data
            });
        });
    }
}

export function getScenesByStory(id) {
    return dispatch => {
        Request.get(`story/${id}/scenes`).then(res => {
            dispatch({
                type: GET_ALL_SCENE,
                payload: res.data
            });
        });
    }
}

export function getScene(id) {
    return dispatch => {
        Request.get(`scene/${id}`).then(res => {
            dispatch({
                type: GET_SCENE,
                payload: res.data
            });
        });
    }
}

export function createScene(data) {
    return dispatch => {
        Request.post('scene', data).then(res => {
            dispatch({
                type: CREATE_SCENE,
                payload: res.data
            });
        });
    }
}

export function updateScene(id, data) {
    return dispatch => {
        Request.put(`scene/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_SCENE,
                payload: res.data
            });
        });
    }
}

export function deleteScene(id) {
    return dispatch => {
        Request.del(`scene/${id}`).then(res => {
            dispatch({
                type: DELETE_SCENE,
                payload: res.data
            });
        });
    }
}