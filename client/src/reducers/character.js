import {
    GET_ALL_CHARACTER,
    GET_CHARACTER,
    CREATE_CHARACTER,
    UPDATE_CHARACTER,
    DELETE_CHARACTER
} from './../actions/character';

const initial = {
    characterList: [],
    character: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_CHARACTER:
            return {...state, characterList: action.payload};
        case GET_CHARACTER:
            return {...state, character: action.payload};
        case CREATE_CHARACTER:
            return {...state, characterList: [...state.characterList, action.payload]};
        case UPDATE_CHARACTER:
            const editCharacter = state.characterList.map(character => {
                if (character.id == action.payload.id) {
                    return action.payload;
                } else {
                    return character;
                }
            });
            return {...state, characterList: editCharacter};
        case DELETE_CHARACTER:
            const deleteCharacter = state.characterList.filter(character => character.id !== action.payload.id);
            return {...state, characterList: deleteCharacter};
    }
    return state;
}