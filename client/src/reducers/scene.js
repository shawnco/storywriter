import {
    GET_ALL_SCENE,
    GET_SCENE,
    CREATE_SCENE,
    UPDATE_SCENE,
    DELETE_SCENE
} from './../actions/scene';

const initial = {
    sceneList: [],
    scene: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_SCENE:
            return {...state, sceneList: action.payload};
        case GET_SCENE:
            return {...state, scene: action.payload};
        case CREATE_SCENE:
            return {...state, sceneList: [...state.sceneList, action.payload]};
        case UPDATE_SCENE:
            const editScene = state.sceneList.map(scene => {
                if (scene.id == action.payload.id) {
                    return action.payload;
                } else {
                    return scene;
                }
            });
            return {...state, sceneList: editScene};
        case DELETE_SCENE:
            const deleteScene = state.sceneList.filter(scene => scene.id !== action.payload.id);
            return {...state, sceneList: deleteScene};
    }
    return state;
}