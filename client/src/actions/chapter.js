import Request from './../request';

export const GET_ALL_CHAPTER = 'get_all_chapter';
export const GET_CHAPTER = 'get_chapter';
export const CREATE_CHAPTER = 'create_chapter';
export const UPDATE_CHAPTER = 'update_chapter';
export const DELETE_CHAPTER = 'delete_chapter';

export function getAllChapter() {
    return dispatch => {
        Request.get('chapter/list').then(res => {
            dispatch({
                type: GET_ALL_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function getChaptersBySeries(id) {
    return dispatch => {
        Request.get(`series/${id}/chapters`).then(res => {
            dispatch({
                type: GET_ALL_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function getChaptersByStory(id) {
    return dispatch => {
        Request.get(`story/${id}/chapters`).then(res => {
            dispatch({
                type: GET_ALL_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function getChapter(id) {
    return dispatch => {
        Request.get(`chapter/${id}`).then(res => {
            dispatch({
                type: GET_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function createChapter(data) {
    return dispatch => {
        Request.post('chapter', data).then(res => {
            dispatch({
                type: CREATE_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function updateChapter(id, data) {
    return dispatch => {
        Request.put(`chapter/${id}`, data).then(res => {
            dispatch({
                type: UPDATE_CHAPTER,
                payload: res.data
            });
        });
    }
}

export function deleteChapter(id) {
    return dispatch => {
        Request.del(`chapter/${id}`).then(res => {
            dispatch({
                type: DELETE_CHAPTER,
                payload: res.data
            });
        });
    }
}