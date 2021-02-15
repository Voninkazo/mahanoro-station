import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import AvailbaleSeat from '../icons/available_seat.svg';
import UnavailbaleSeat from '../icons/unavailable_seat.svg';
import ChosenSeat from '../icons/chosen_seat.svg';
import CarLogo from '../icons/car_logo.svg';

import ChooseSeats from '../components/chooseSeats';
import { bookSeats } from '../actions/seats';

function BookSeatscontainer() {
    const cities = useSelector(state => state.cities);
    console.log(cities);

    const chosenSeats = useSelector(state => state.chosenSeats);
    console.log(chosenSeats);

    const dispatch = useDispatch();

    const {tripId} = useParams();
    console.log(tripId);

    const newCity = cities && cities.filter(city => city.id == tripId)
    console.log(newCity);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAmount = newCity.reduce((total, seat) => {
            total += (seat.price) * chosenSeats.length;
            return total;
        }, 0);
        setTotal(totalAmount);
    }, [chosenSeats])

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
                                function seatFunction() {
                                    if(chosenSeats.some(seatItem => seatItem.id === seat.id )) {
                                        return <ChooseSeats.SeatIcon
                                        src={
                                            ChosenSeat
                                        }
                                        />
                                    }
                                else {
                                    return <ChooseSeats.SeatIcon
                                    src={AvailbaleSeat}
                                    onClick={() => dispatch(bookSeats(seat))}
                                />
                                }
                                }
                               return (
                                <ChooseSeats.SeatItem key={seat.id}>
                                {
                                    seat.isAvailable ? seatFunction()
                                     :
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
                    <ChooseSeats.Button>Book {chosenSeats.length} seats</ChooseSeats.Button>
                        <ChooseSeats.TotalAmount>TOTAL: {total}Ar</ChooseSeats.TotalAmount>
                </ChooseSeats.TripDetails>
            </ChooseSeats.Pane>
        </ChooseSeats>
    )
}

export default BookSeatscontainer
