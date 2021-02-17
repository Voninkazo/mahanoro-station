import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router';

import {getData} from '../actions/data';
import {bookTrips} from '../actions/seats';
import Clock from '../icons/clock.svg';
import NextTrips from '../components/nextTrips';
import { Link } from 'react-router-dom';

export default function NextTripsContainer() {

    const trips = useSelector(state => state.trips);
    console.log(trips);

    const dispatch = useDispatch();

    const {dest} = useParams();
    console.log(dest)

    const nextTrips = trips.filter(city => city.destination === dest);
    console.log(nextTrips);
    
    useEffect(() => {
        dispatch(getData());
    },[])

    function getDay(day) {
        switch (day) {
            case 1:
            return "Monday"
            case 2:
            return "Tuesday"
            case 3:
            return "Wednesday"
            case 4:
            return "Thursday"
            case 5:
            return "Friday"
            case 6:
            return "Saturday"
            case 7:
            return "Sunday"
            default:
                break;
        }
    }

    return (
        <NextTrips>
            <NextTrips.Clock src={Clock} alt="Clock"/>
            <NextTrips.Title>Next trips to {dest}</NextTrips.Title>
            {
                nextTrips.map(trip => {
                    return (
                        <NextTrips.Wrapper key={trip.id}>
                            <NextTrips.CarLogo />
                            <NextTrips.ListContainer>
                                <NextTrips.DepartureTime> 
                                   <p>{getDay(new Date(trip.departureTime).getDay())}</p>
                                    <p>{new Date(trip.departureTime).getHours()}: {new Date(trip.departureTime).getMinutes()}</p>
                                </NextTrips.DepartureTime>
                                <NextTrips.DepartureTime>{new Date(trip.departureTime).toLocaleDateString()}</NextTrips.DepartureTime>
                                <NextTrips.NumOfSeats>
                                    {
                                    trip.seats.filter(seat => seat.isAvailable == true).length
                                    }
                                    seats left
                                </NextTrips.NumOfSeats>
                                <>
                                <Link to={`/trip/${trip.id}`}>
                                    <NextTrips.Button 
                                        onClick={() => dispatch(bookTrips(trip, trip.id))}
                                        type="button" 
                                        disabled={trip.seats.filter(seat => seat.isAvailable == true).length === 0}
                                        >
                                        Book a seat
                                    </NextTrips.Button>
                                </Link>
                                </>
                            </NextTrips.ListContainer>
                        </NextTrips.Wrapper>
                    )
                })
            }
        </NextTrips>
    )
}
