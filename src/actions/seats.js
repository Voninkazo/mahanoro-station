export function bookSeats(seat) {
    return {
        type: "BOOK_SEATS",
        payload:seat
    }
}

// export function bookingSeats(seat, trip, user) {
//     return {
//         type: "BOOKING_SEATS",
//         payload: seat,
//         trip: trip,
//         user: user,
//     }
// }


export function bookTrips(trip) {
    return {
        type: "BOOK_TRIP",
        payload: trip,
    }
}


export function removeSeats(id) {
    return {
        type: "REMOVE_SEAT",
        payload: id,
    }
}

export function  confirmBooking(seatId, tripId) {
    return {
        type: "CONFIRM_BOOKING",
        payload: {
            seatId: seatId,
            tripId: tripId,
        }   
    }
}