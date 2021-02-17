export function setAccount(account) {
    return {
        type: "SET_ACCOUNT",
        payload: account,
    }
}

export function setFirstName(name) {
    return {
        type: "SET_FIRSTNAME",
        payload: name
    }
}

export function setLastName(name) {
    return {
        type: "SET_LASTNAME",
        payload: name
    }
}

export function setPhoneNumber(number) {
    return {
        type: "SET_PHONE_NUMBER",
        payload: number
    }
}



export function setBookings(obj) {
    return {
        type: "SET_BOOKINGS",
        payload: obj,
    }
}