import { bookTrips } from "../actions/seats";

export default function  bookedTrips(state = [], action) {
    switch (action.type) {
        case "BOOK_TRIP":
            console.log(bookedTrips);
           return [...state, action.payload]
    
        default:
            return state;
    }
}