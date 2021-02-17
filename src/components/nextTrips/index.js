import React from 'react';

import {Container, Clock, Title, Wrapper, CarLogo,Pane, Destination, ListContainer, DepartureTime, NumOfSeats, Button, } from './styles/nextTrips';

function NextTrips({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

NextTrips.Clock = function NextTripsClock({children, ...restProps}) {
     return <Clock {...restProps} />
}

NextTrips.Title = function NextTripsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

NextTrips.Wrapper = function NextTripsWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

NextTrips.Destination = function NextTripsDestination({children, ...restProps}) {
    return <Destination {...restProps}>{children}</Destination>
}

NextTrips.Pane = function NextTripsPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

NextTrips.CarLogo = function NextTripsCarLogo({children, ...restProps}) {
    return <CarLogo {...restProps} />
}

NextTrips.ListContainer = function NextTripsListContainer({children, ...restProps}) {
    return <ListContainer {...restProps}>{children}</ListContainer>
}

NextTrips.DepartureTime = function NextTripsDepartureTime({children, ...restProps}) {
    return <DepartureTime {...restProps}>{children}</DepartureTime>
}

NextTrips.NumOfSeats = function NextTripsNumOfSeats({children, ...restProps}) {
    return <NumOfSeats {...restProps}>{children}</NumOfSeats>
}

NextTrips.Button = function NextTripsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}




export default NextTrips
