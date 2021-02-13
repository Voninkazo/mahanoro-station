import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function BookSeatscontainer({trip}) {
    console.log(trip)

    // const cities = useSelector(state => state.cities);

    // const {id} = useParams();
    // console.log(id);

    // const newCity = cities.filter(city => city.id === id)
    // console.log(newCity);

    return (
        <div>
           <h3>Book a seat to</h3>
        </div>
    )
}

export default BookSeatscontainer
