export function bookSeats(seat) {
    return {
        type: "BOOK_SEAT",
        payload: seat,
    }
}

export function  confirmBooking(seatId) {
    return {
        type: "CONFIRM_BOOKING",
        paylod: seatId,
    }
}