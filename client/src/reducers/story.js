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
                        stories: state.story.scenes.map(scene => {
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

    }
    return state;
}