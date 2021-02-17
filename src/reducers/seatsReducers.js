// export default function chosenSeats(state= [], action) {
//     switch (action.type) {
//         case "BOOK_SEATS":
//         console.log(state);
//         return [...state, action.payload]

//         case "REMOVE_SEAT": 
//         const newSeats = state.map(seat => {
//             if (seat.id == action.payload.seatId) {
//                 return {
//                     ...seat,
//                     isAvailable: true,
//                 }
//             };
//             return seat
//         })
//         return newSeats;
    
//         default:
//            return state;
//     }
// }


export default function seats(state = {}, action) {
    switch (action.type) {
        case "PICK_SEAT":
            return {
                ...state,
                bookedSeats: state.bookedSeats + 1
            }
        case "GET_PRICE":
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }
        case "RESET_SEATS":
            return {
                ...state,
                bookedSeats: 0,
                totalPrice: 0,
            }
        
        default:
            return state
    }
}