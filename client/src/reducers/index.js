import { combineReducers } from 'redux';
import series from './series';
import story from './story';
import scene from './scene';

export default combineReducers({
    series,
    story,
    scene
});