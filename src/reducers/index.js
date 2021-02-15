import {combineReducers} from 'redux';
import cities from './dataReducers';
import destination from './citiesReducers';
import chosenSeats from './seatsReducers';

export default combineReducers({
    cities,
    destination,
    chosenSeats,
})