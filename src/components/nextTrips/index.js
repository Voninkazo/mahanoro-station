import React from 'react';

import {Container, Clock, Title, Wrapper, CarLogo, ListContainer, DepartureTime, NumOfSeats, Button, } from './styles/nextTrips';

function NextTrips({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

NextTrips.Clock = function NextTripsClock({children, ...restProps}) {
    <Clock {...restProps} />
}

NextTrips.Title = function NextTripsTitle({children, ...restProps}) {
    <Title {...restProps}>{children}</Title>
}

NextTrips.Wrapper = function NextTripsWrapper({children, ...restProps}) {
    <Wrapper {...restProps}>{children}</Wrapper>
}

NextTrips.CarLogo = function NextTripsCarLogo({children, ...restProps}) {
    <CarLogo {...restProps} />
}

NextTrips.ListContainer = function NextTripsListContainer({children, ...restProps}) {
    <ListContainer {...restProps}>{children}</ListContainer>
}

NextTrips.DepartureTime = function NextTripsDepartureTime({children, ...restProps}) {
    <DepartureTime {...restProps}>{children}</DepartureTime>
}

NextTrips.NumOfSeats = function NextTripsNumOfSeats({children, ...restProps}) {
    <NumOfSeats {...restProps}>{children}</NumOfSeats>
}

NextTrips.Button = function NextTripsButton({children, ...restProps}) {
    <Button {...restProps}>{children}</Button>
}




export default NextTrips
