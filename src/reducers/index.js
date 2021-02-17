import {combineReducers} from 'redux';
import trips from './dataReducers';
import destinations from './citiesReducers';
import chosenSeats from './seatsReducers';
import showModal from './modalReducers';
import bookedTrips from './tripsReducers';
import account from './accountReducers';
export default combineReducers({
    trips,
    destinations,
    chosenSeats,
    showModal,
    bookedTrips,
    account,
})