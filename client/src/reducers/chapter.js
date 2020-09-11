import {
    GET_ALL_CHAPTER,
    GET_CHAPTER,
    CREATE_CHAPTER,
    UPDATE_CHAPTER,
    DELETE_CHAPTER
} from './../actions/chapter';

const initial = {
    chapterList: [],
    chapter: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_CHAPTER:
            return {...state, chapterList: action.payload};
        case GET_CHAPTER:
            return {...state, chapter: action.payload};
        case CREATE_CHAPTER:
            return {...state, chapterList: [...state.chapterList, action.payload]};
        case UPDATE_CHAPTER:
            const editChapter = state.chapterList.map(chapter => {
                if (chapter.id == action.payload.id) {
                    return action.payload;
                } else {
                    return chapter;
                }
            });
            return {...state, chapterList: editChapter};
        case DELETE_CHAPTER:
            const deleteChapter = state.chapterList.filter(chapter => chapter.id !== action.payload.id);
            return {...state, chapterList: deleteChapter};
    }
    return state;
}