import {combineReducers} from 'redux';
import trips from './dataReducers';
import destinations from './citiesReducers';
import seats from './seatsReducers';
import showModal from './modalReducers';
import bookedTrips from './tripsReducers';
import account from './accountReducers';
export default combineReducers({
    trips,
    destinations,
    showModal,
    bookedTrips,
    account,
    seats,
})