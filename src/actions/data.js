export function getData() {
    return async (dispatch) => {
        const response = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`)
        const cities = await response.json();
        console.log(cities);
        dispatch({
            type: "GET_DATA",
            payload: cities,
        })
    }
}