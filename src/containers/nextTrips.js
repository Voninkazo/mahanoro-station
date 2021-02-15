import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router';

import {getData} from '../actions/data';
import Clock from '../icons/clock.svg';
import dateFormated from '../dateFormator';
import { Link } from 'react-router-dom';

export default function NextTripsContainer() {

    const cities = useSelector(state => state.cities);
    console.log(cities);

    const dispatch = useDispatch();

    const {dest} = useParams();
    console.log(dest)

    const nextTrips = cities.filter(city => city.destination === dest);
    console.log(nextTrips);
    
    useEffect(() => {
        dispatch(getData());
    },[])

    // const elemet = nextTrips.map(trip => {
    //     <BookSeatscontainer key={trip.id} trip={trip} />
    // })

    return (
        <div>
            <img src={Clock} alt="Clock"/>
            <h3>Next trips to {dest}</h3>
            {
                nextTrips.map(trip => {
                    return (
                        <div key={trip.id}>
                            <img />
                            <ul>
                                <li> {dateFormated(trip.departureTime)}</li>
                                <li>
                                    {
                                    trip.seats.filter(seat => seat.isAvailable == true).length
                                    }
                                    seats left
                                </li>
                                <li>
                                <Link to={`/trip/${trip.id}`}>
                                    <button>Book a seat</button>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
