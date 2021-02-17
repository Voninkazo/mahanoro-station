import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import AvailbaleSeat from '../icons/available_seat.svg';
import UnavailbaleSeat from '../icons/unavailable_seat.svg';
import ChosenSeat from '../icons/chosen_seat.svg';
import CarLogo from '../icons/car_logo.svg';
import IconClose from '../icons/icon_close.svg';
import TickIcon from '../icons/tick.svg';

import ChooseSeats from '../components/chooseSeats';
import Modal from '../components/modal';

import { getPrice,pickSeats, resetSeats, bookTrips} from '../actions/seats';
import {displayModal} from '../actions/modal';
// import {confirmBooking} from '../actions/seats';


function BookSeatscontainer() {
    const trips = useSelector(state => state.trips);
    console.log(trips);

    const bookedSeats = useSelector(state => state.seats.bookedSeats);
    console.log(bookedSeats);

    const seats = useSelector(state => state.seats);
    console.log(seats);

    const totalPrice = useSelector(state => state.seats.totalPrice);
    console.log(totalPrice);

    const showModal = useSelector(state => state.showModal);
    console.log(showModal);

    const dispatch = useDispatch();

    const {tripId} = useParams();
    console.log(tripId);

    const trip = trips.filter(trip => trip.id == tripId)
    console.log(trip);

    function handleClicks() {
        dispatch(displayModal(false));
        // dispatch(confirmBooking(trip.id));
        // dispatch(resetSeats());
        // dispatch(bookTrips(trip, seats));
    }

    return (
        <ChooseSeats>
           <ChooseSeats.Heading>
                <ChooseSeats.CarLogo src={CarLogo} alt="Car Logo" />
               <ChooseSeats.Title>Book a seat to: <span>{ trip[0]?.destination}</span></ChooseSeats.Title>
            </ChooseSeats.Heading>
            <ChooseSeats.Pane>
                <ChooseSeats.Seats>
                    <ChooseSeats.SubHeading>PICK A SEAT</ChooseSeats.SubHeading>
                    <ChooseSeats.SeatsContainer>
                        {
                            trip[0]?.seats.map(seat => {
                                return (
                                seat.isAvailable ?
                                 <ChooseSeats.SeatIcon
                                    src={AvailbaleSeat}
                                    onClick={() => (
                                        dispatch(getPrice(trip[0]?.price)),
                                        dispatch(pickSeats())
                                    )}
                                />
                                    :
                                <ChooseSeats.SeatIcon src={UnavailbaleSeat} alt="Seat" />
                                )
})}
                    </ChooseSeats.SeatsContainer>
                </ChooseSeats.Seats>
                <ChooseSeats.TripDetails>
                    <ChooseSeats.SubHeading>TRIP INFORMATIONS:</ChooseSeats.SubHeading>
                    <ChooseSeats.DetailContainer>
                        <ChooseSeats.List>
                            <ChooseSeats.Key>DepartureTime </ChooseSeats.Key>
                            <ChooseSeats.Value>
                                {new Date(trip[0]?.departureTime).getHours()}: {new Date(trip[0]?.departureTime).getMinutes()}, 
                                {new Date(trip[0]?.departureTime).toLocaleDateString()}
                            </ChooseSeats.Value>
                        </ChooseSeats.List>
                        <ChooseSeats.List>
                            <ChooseSeats.Key>Driver </ChooseSeats.Key>
                                <ChooseSeats.Value>{trip[0]?.driverName}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Driver's contact</ChooseSeats.Key>
                                <ChooseSeats.Value>{trip[0]?.driverContact}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Estimated duration </ChooseSeats.Key>
                                <ChooseSeats.Value>{trip[0]?.estimatedDuration}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Breaks</ChooseSeats.Key>
                                <ChooseSeats.Value>{trip[0]?.breaks}</ChooseSeats.Value>
                            </ChooseSeats.List>
                    </ChooseSeats.DetailContainer>
                    <ChooseSeats.Price>{trip[0]?.price}Ar/seat</ChooseSeats.Price>
                    <ChooseSeats.Button
                        type="button"
                        onClick={() => dispatch(displayModal(true))} 
                    >
                        Book {bookedSeats} seats
                    </ChooseSeats.Button>
                        <ChooseSeats.TotalAmount>TOTAL: {totalPrice}Ar</ChooseSeats.TotalAmount>
                </ChooseSeats.TripDetails>
            </ChooseSeats.Pane>
            {
                showModal &&
                <Modal>
            <Modal.Wrapper>
                <Modal.IconClose src={IconClose} onClick={() => dispatch(displayModal(false))} alt="Close" />
                <Modal.Heading>
                    <Modal.IconTick src={TickIcon} />
                    <Modal.Title>BOOKING CONFIRMED!</Modal.Title>
                </Modal.Heading>
                <Modal.Text>
                    Thank you for trusting our services. Your booking has been added to your account. You can review it there.
                </Modal.Text>
                <Link to={`/account/${trip[0]?.id}/`}>
                    <Modal.Button 
                        type="button"
                        onClick={() => handleClicks()}
                        >
                        Checking your account
                    </Modal.Button>
                </Link>
            </Modal.Wrapper>
        </Modal>
            }
        </ChooseSeats>
    )
}

export default BookSeatscontainer
