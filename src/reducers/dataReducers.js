export default function trips(state = [], action) {
    switch (action.type) {
        case "GET_DATA":
        return action.payload;

        default:
            return state;   
    }
}