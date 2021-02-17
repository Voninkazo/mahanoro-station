export function getPrice(price) {
    return {
        type: "GET_PRICE",
        payload:price
    }
}

export function  pickSeats(seat) {
    return {
        type: "PICK_SEAT",
        payload: seat,
    }
}


export function bookTrips(trip,seat) {
    return {
        type: "BOOK_TRIP",
        payload: trip,
        seat:seat,
    }
}

export function cancelTrip(id) {
	return {
		type: "CANCEL_TRIP",
		payload: id
	}
}

export function resetSeats() {
	return {
		type: "RESET_SEATS",
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