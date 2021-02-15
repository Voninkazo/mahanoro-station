export default function chosenSeats(state= [], action) {
    switch (action.type) {
        case "BOOK_SEAT":
        return [...state, action.payload]
        default:
           return state;
    }
}