import React from 'react';
import AvailbaleSeat from '../icons/available_seat.svg';
import UnavailbaleSeat from '../icons/unavailable_seat.svg';
import CarLogo from '../icons/car_logo.svg';


import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import ChooseSeats from '../components/chooseSeats';

function BookSeatscontainer() {
    const cities = useSelector(state => state.cities);
    console.log(cities);

    const {tripId} = useParams();
    console.log(tripId);

    const newCity = cities && cities.filter(city => city.id == tripId)
    console.log(newCity);

    return (
        <ChooseSeats>
           <ChooseSeats.Heading>
                <ChooseSeats.CarLogo src={CarLogo} alt="Car Logo" />
               <ChooseSeats.Title>Book a seat to: <span>{ newCity[0]?.destination}</span></ChooseSeats.Title>
            </ChooseSeats.Heading>
            <ChooseSeats.Pane>
                <ChooseSeats.Seats>
                    <ChooseSeats.SubHeading>PICK A SEAT</ChooseSeats.SubHeading>
                    <ChooseSeats.SeatsContainer>
                        {
                            newCity[0]?.seats.map(seat => {
                               return (
                                <ChooseSeats.SeatItem key={seat.id}>
                                {
                                    seat.isAvailable ? <ChooseSeats.SeatIcon src={AvailbaleSeat} alt="Seat" /> :
                                    <ChooseSeats.SeatIcon src={UnavailbaleSeat} alt="Seat" />
                                }
                                </ChooseSeats.SeatItem>
                               )
                            })  
                        }   
                    </ChooseSeats.SeatsContainer>
                </ChooseSeats.Seats>
                <ChooseSeats.TripDetails>
                    <ChooseSeats.SubHeading>TRIP INFORMATIONS:</ChooseSeats.SubHeading>
                    <ChooseSeats.DetailContainer>
                        <ChooseSeats.List>
                            <ChooseSeats.Key>DepartureTime </ChooseSeats.Key>
                            <ChooseSeats.Value>{newCity[0]?.departureTime}</ChooseSeats.Value>
                        </ChooseSeats.List>
                        <ChooseSeats.List>
                            <ChooseSeats.Key>Driver </ChooseSeats.Key>
                                <ChooseSeats.Value>{newCity[0]?.driverName}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Driver's contact</ChooseSeats.Key>
                                <ChooseSeats.Value>{newCity[0]?.driverContact}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Estimated duration </ChooseSeats.Key>
                                <ChooseSeats.Value>{newCity[0]?.estimatedDuration}</ChooseSeats.Value>
                            </ChooseSeats.List>
                            <ChooseSeats.List>
                                <ChooseSeats.Key>Breaks</ChooseSeats.Key>
                                <ChooseSeats.Value>{newCity[0]?.breaks}</ChooseSeats.Value>
                            </ChooseSeats.List>
                    </ChooseSeats.DetailContainer>
                    <ChooseSeats.Price>{newCity[0]?.price}Ar/seat</ChooseSeats.Price>
                    <ChooseSeats.Button>{}</ChooseSeats.Button>
                        <ChooseSeats.TotalAmount>Book {} seats</ChooseSeats.TotalAmount>
                </ChooseSeats.TripDetails>
            </ChooseSeats.Pane>
        </ChooseSeats>
    )
}

export default BookSeatscontainer
