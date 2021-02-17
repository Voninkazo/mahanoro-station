export default function  bookedTrips(state = [], action) {
    switch (action.type) {
        case "BOOK_TRIP":
            console.log(bookedTrips);
         const newObj = Object.assign(action.payload, action.payload[bookedTrips] = action.seat)
        return [...state, newObj]

        case "CANCEL_TRIP":
            const newTrips = state.filter(trip => trip.id !== action.payload)
            return [...newTrips]

        //    case "CONFIRM_BOOKING": 
        //    console.log(state);
        //    const newArr = state.map(trip => {
        //        console.log(trip.id,action.payload.tripId)
        //        if(trip.id == action.payload.tripId) {
        //             return {
        //                 ...trip,
        //                 seats: trip.seats.map(seat => {
        //                     console.log(action.payload.seatId)
        //                     if(seat.id == action.payload.seatId) {
        //                         return {
        //                             ...seat,
        //                             isAvailable: !seat.isAvailable
        //                         }
        //                     }
        //                 })
        //             }
        //        };
        //        return trip
        //    });
        //    console.log(newArr);
        //    return newArr;
    
        default:
            return state;
    }
}