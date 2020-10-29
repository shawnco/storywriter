import {
    GET_ALL_SERIES,
    GET_SERIES,
    CREATE_SERIES,
    UPDATE_SERIES,
    DELETE_SERIES
} from './../actions/series';


const initial = {
    seriesList: [],
    series: {}
};

export default function(state = initial, action) {
    switch (action.type) {
        case GET_ALL_SERIES:
            return {...state, seriesList: action.payload};
        case GET_SERIES:
            return {...state, series: action.payload};
        case CREATE_SERIES:
            return {...state, seriesList: [...state.seriesList, action.payload]};
        case UPDATE_SERIES:
            const editSeries = state.seriesList.map(series => {
                if (series.id == action.payload.id) {
                    return action.payload;
                } else {
                    return series;
                }
            });
            return {...state, seriesList: editSeries};
        case DELETE_SERIES:
            const deleteSeries = state.seriesList.filter(series => series.id !== action.payload.id);
            return {...state, seriesList: deleteSeries};   
    }
    
    return state;
}