import Request from './../request';

export const GET_ALL_STORY = 'get_all_story';
export const GET_STORY = 'get_story';
export const CREATE_STORY = 'create_story';
export const UPDATE_STORY = 'update_story';
export const DELETE_STORY = 'delete_story';

export function getAllStory() {
    return dispatch => {
        Request.get('story/list').then(res => {
            dispatch({
                type: GET_ALL_STORY,
                payload: res.data
            });
        });
    }
}

export function getStory(id) {
    return dispatch => {
        Request.get(`story/${id}`).then(res => {
            dispatch({
                type: GET_STORY,
                payload: res.data
            });
        });
    }
}

export function createStory(data) {
    return dispatch => {
        Request.post('story', data).then(res => {
            dispatch({
                type: CREATE_STORY,
                payload: res.data
            });
        });
    }
}

export function updateStory(id, data) {
    return dispatch => {
        Request.put(`story/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_STORY,
                payload: res.data
            });
        });
    }
}

export function deleteStory(id) {
    return dispatch => {
        Request.del(`story/${id}`).then(res => {
            dispatch({
                type: DELETE_STORY,
                payload: res.data
            });
        });
    }
}