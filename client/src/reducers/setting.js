import {
    GET_ALL_SETTING,
    GET_SETTING,
    CREATE_SETTING,
    UPDATE_SETTING,
    DELETE_SETTING
} from './../actions/setting';

const initial = {
    settingList: [],
    setting: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_SETTING:
            return {...state, settingList: action.payload};
        case GET_SETTING:
            return {...state, setting: action.payload};
        case CREATE_SETTING:
            return {...state, settingList: [...state.settingList, action.payload]};
        case UPDATE_SETTING:
            const editSetting = state.settingList.map(setting => {
                if (setting.id == action.payload.id) {
                    return action.payload;
                } else {
                    return setting;
                }
            });
            return {...state, settingList: editSetting};
        case DELETE_SETTING:
            const deleteSetting = state.settingList.filter(setting => setting.id !== action.payload.id);
            return {...state, settingList: deleteSetting};
    }
    return state;
}