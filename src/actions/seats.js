export function bookSeats(seat) {
    return {
        type: "BOOK_SEATS",
        payload: seat,
    }
}

export function bookTrips(trip) {
    return {
        type: "BOOK_TRIP",
        payload: trip,
    }
}

// export function  pickSeats() {
//     return {
//         type: "PICK_SEATS",
//     }
// }

export function removeSeats(id) {
    return {
        type: "REMOVE_SEAT",
        payload: id,
    }
}

export function  confirmBooking(seatId) {
    return {
        type: "CONFIRM_BOOKING",
        paylod: seatId,
    }
}