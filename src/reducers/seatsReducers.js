export default function chosenSeats(state= [], action) {
    switch (action.type) {
        case "BOOK_SEATS":
        console.log(state);
        return [...state, action.payload]

        case "REMOVE_SEAT": 
        const newSeats = state.map(seat => {
            if (seat.id == action.payload.seatId) {
                return {
                    ...seat,
                    isAvailable: true,
                }
            };
            return seat
        })
        return newSeats;
    
        default:
           return state;
    }
}