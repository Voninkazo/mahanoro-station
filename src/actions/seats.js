export function bookSeats(seat) {
    return {
        type: "BOOK_SEAT",
        payload: seat,
    }
}