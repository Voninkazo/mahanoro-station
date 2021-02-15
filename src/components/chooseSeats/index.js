import React from 'react'

import { Container, Heading,Title, CarLogo, Pane, Seats,List, SubHeading, TripDetails,SeatsContainer, SeatIcon, SeatItem, DetailContainer, Key, Value, Price, TotalAmount, Button} from './styles/chooseSeats';

function ChooseSeats({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

ChooseSeats.Heading = function ChooseSeatsHeading({children, ...restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}

ChooseSeats.Title = function ChooseSeatsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

ChooseSeats.CarLogo = function ChooseSeatsCarLogo({...restProps}) {
    return <CarLogo {...restProps} />
}

ChooseSeats.Pane = function ChooseSeatsPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

ChooseSeats.Seats = function ChooseSeatsSeats({children, ...restProps}) {
    return <Seats {...restProps}>{children}</Seats>
}

ChooseSeats.SubHeading = function ChooseSeatsSubHeading({children, ...restProps}) {
    return <SubHeading {...restProps}>{children}</SubHeading>
}

ChooseSeats.TripDetails = function ChooseSeatsTripDetails({children, ...restProps}) {
    return <TripDetails {...restProps}>{children}</TripDetails>
}
ChooseSeats.DetailContainer = function ChooseSeatsDetailContainer({children, ...restProps}) {
    return <DetailContainer {...restProps}>{children}</DetailContainer>
}

ChooseSeats.List = function ChooseSeatsList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}



ChooseSeats.Key = function ChooseSeatsKey({children, ...restProps}) {
    return <Key {...restProps}>{children}</Key>
}

ChooseSeats.Value = function ChooseSeatsValue({children, ...restProps}) {
    return <Value {...restProps}>{children}</Value>
}

ChooseSeats.Price = function ChooseSeatsPrice({children, ...restProps}) {
    return <Price {...restProps}>{children}</Price>
}

ChooseSeats.SeatsContainer = function ChooseSeatsSeatsContainer({children, ...restProps}) {
    return <SeatsContainer {...restProps}>{children}</SeatsContainer>
}

ChooseSeats.SeatItem = function ChooseSeatsSeatItem({children, ...restProps}) {
    return <SeatItem {...restProps}>{children}</SeatItem>
}

ChooseSeats.SeatIcon = function ChooseSeatsSeatIcon({...restProps}) {
    return <SeatIcon {...restProps} />
}

ChooseSeats.Button = function ChooseSeatsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

ChooseSeats.TotalAmount = function ChooseSeatsTotalAmount({children, ...restProps}) {
    return <TotalAmount {...restProps}>{children}</TotalAmount>
}

export default ChooseSeats
