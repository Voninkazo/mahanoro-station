export default function chosenSeats(state= [], action) {

    switch (action.type) {
        case "BOOK_SEAT":
        console.log(state);
        return [...state, action.payload]

        case "CONFIRM_BOOKING": 
        console.log(state);
        const newArr = state.map(seat => {
            if (seat.id === action.payload) {
                return {
                    ...seat,
                    isAvailable: false,
                }
            };
            return seat;
        });
        console.log(newArr);
        return newArr;

        default:
           return state;
    }
}