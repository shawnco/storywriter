import { combineReducers } from 'redux';
import series from './series';
import story from './story';
import scene from './scene';
import chapter from './chapter';
import character from './character';

export default combineReducers({
    series,
    story,
    scene,
    chapter,
    character
});