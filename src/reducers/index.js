import {combineReducers} from 'redux';
import trips from './dataReducers';
import destination from './citiesReducers';
import chosenSeats from './seatsReducers';
import showModal from './modalReducers';
import user from './userReducer';
import bookedTrips from './tripsReducers';

export default combineReducers({
    trips,
    destination,
    chosenSeats,
    showModal,
    user,
    bookedTrips,
})