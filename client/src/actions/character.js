import Request from './../request';

export const GET_ALL_CHARACTER = 'get_all_character';
export const GET_CHARACTER = 'get_character';
export const CREATE_CHARACTER = 'create_character';
export const UPDATE_CHARACTER = 'update_character';
export const DELETE_CHARACTER = 'delete_character';

export function getAllCharacter() {
    return dispatch => {
        Request.get('character/list').then(res => {
            dispatch({
                type: GET_ALL_CHARACTER,
                payload: res.data
            });
        });
    }
}

export function getCharacter(id) {
    return dispatch => {
        Request.get(`character/${id}`).then(res => {
            dispatch({
                type: GET_CHARACTER,
                payload: res.data
            });
        });
    }
}

export function createCharacter(data) {
    return dispatch => {
        Request.post('character', data).then(res => {
            dispatch({
                type: CREATE_CHARACTER,
                payload: res.data
            });
        });
    }
}

export function updateCharacter(id, data) {
    return dispatch => {
        Request.put(`character/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_CHARACTER,
                payload: res.data
            });
        });
    }
}

export function deleteCharacter(id) {
    return dispatch => {
        Request.del(`character/${id}`).then(res => {
            dispatch({
                type: DELETE_CHARACTER,
                payload: res.data
            });
        });
    }
}