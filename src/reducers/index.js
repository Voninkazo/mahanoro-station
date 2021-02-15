import {combineReducers} from 'redux';
import cities from './dataReducers';
import destination from './citiesReducers';
import chosenSeats from './seatsReducers';
import showModal from './modalReducers';
import user from './userReducer';

export default combineReducers({
    cities,
    destination,
    chosenSeats,
    showModal,
    user,
})