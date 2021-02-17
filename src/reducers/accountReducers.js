function account(state={}, action) {
    switch (action.type) {
        case "SET_ACCOUNT":
            return action.payload;

            case "SET_FIRSTNAME":
                return {
                    ...state,
                    firstName: action.payload
                };
            case "SET_LASTNAME":
                return {
                    ...state,
                    lastName: action.payload
                };
            case "SET_PHONE_NUMBER":
                return {
                    ...state,
                    phoneNumber: action.payload
                };
        default:
           return state;
    }
}

export default account
