import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router';

import {getData} from '../actions/data';
// import {bookTrips} from '../actions/seats';
import Clock from '../icons/clock.svg';
import dateFormated from '../dateFormator';
import NextTrips from '../components/nextTrips';
import { Link } from 'react-router-dom';

export default function NextTripsContainer() {

    const trips = useSelector(state => state.trips);
    console.log(trips);

    // const bookedTrips = useSelector(state => state.bookedTrips);
    // console.log(bookedTrips);

    const dispatch = useDispatch();

    const {dest} = useParams();
    console.log(dest)

    const nextTrips = trips.filter(city => city.destination === dest);
    console.log(nextTrips);
    
    useEffect(() => {
        dispatch(getData());
    },[])

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
                                <NextTrips.DepartureTime> {dateFormated(trip.departureTime)}</NextTrips.DepartureTime>
                                <NextTrips.NumOfSeats>
                                    {
                                    trip.seats.filter(seat => seat.isAvailable == true).length
                                    }
                                    seats left
                                </NextTrips.NumOfSeats>
                                <>
                                <Link to={`/trip/${trip.id}`}>
                                    <NextTrips.Button 
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
