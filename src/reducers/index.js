import {combineReducers} from 'redux';
import cities from './dataReducers';
import destination from './cities';

export default combineReducers({
    cities,
    destination,
})