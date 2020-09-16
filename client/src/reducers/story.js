import {
    GET_ALL_STORY,
    GET_STORY,
    CREATE_STORY,
    UPDATE_STORY,
    DELETE_STORY
} from './../actions/story';

import {
    CREATE_SCENE,
    UPDATE_SCENE,
    DELETE_SCENE
} from './../actions/scene';

import {
    CREATE_CHAPTER,
    UPDATE_CHAPTER,
    DELETE_CHAPTER
} from './../actions/chapter';

import {
    CREATE_CHARACTER,
    UPDATE_CHARACTER,
    DELETE_CHARACTER
} from './../actions/character';

const initial = {
    storyList: [],
    story: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_STORY:
            return {...state, storyList: action.payload};
        case GET_STORY:
            return {...state, story: action.payload};
        case CREATE_STORY:
            return {...state, storyList: [...state.storyList, action.payload]};
        case UPDATE_STORY:
            const editStory = state.storyList.map(story => {
                if (story.id == action.payload.id) {
                    return action.payload;
                } else {
                    return story;
                }
            });
            return {...state, storyList: editStory};
        case DELETE_STORY:
            const deleteStory = state.storyList.filter(story => story.id !== action.payload.id);
            return {...state, storyList: deleteStory};

        case CREATE_SCENE:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        scenes: [
                            ...state.story.scenes,
                            action.payload
                        ]
                    }
                };
            } else {
                return state;
            }
        case UPDATE_SCENE:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        scenes: state.story.scenes.map(scene => {
                            if (action.payload.id == scene.id) {
                                return action.payload;
                            } else {
                                return scene;
                            }
                        })
                    }
                }
            } else {
                return state;
            }
        case DELETE_SCENE:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        scenes: state.story.scenes.filter(scene => scene.id !== action.payload.id)
                    }
                }
            } else {
                return state;
        }

        case CREATE_CHAPTER:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        chapters: [
                            ...state.story.chapters,
                            action.payload
                        ]
                    }
                };
            } else {
                return state;
            }
        case UPDATE_CHAPTER:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        chapters: state.story.chapters.map(chapter => {
                            if (action.payload.id == chapter.id) {
                                return action.payload;
                            } else {
                                return chapter;
                            }
                        })
                    }
                }
            } else {
                return state;
            }
        case DELETE_CHAPTER:
            if (action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        chapters: state.story.chapters.filter(chapter => chapter.id !== action.payload.id)
                    }
                }
            } else {
                return state;
        }

        case CREATE_CHARACTER:
            if (state.story.story && action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        characters: [
                            ...state.story.characters,
                            action.payload
                        ]
                    }
                };
            } else {
                return state;
            }
        case UPDATE_CHARACTER:
            if (state.story.story && action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        characters: state.story.characters.map(character => {
                            if (action.payload.id == character.id) {
                                return action.payload;
                            } else {
                                return character;
                            }
                        })
                    }
                }
            } else {
                return state;
            }
        case DELETE_CHARACTER:
            if (state.story.story && action.payload.story == state.story.story.id) {
                return {
                    ...state,
                    story: {
                        ...state.story,
                        characters: state.story.characters.filter(character => character.id !== action.payload.id)
                    }
                }
            } else {
                return state;
        }            

    }
    return state;
}