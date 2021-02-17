import React from 'react'

import {Container, Button, CarLogo, Title, Group, ButtonContainer} from './styles/cities';

function Cities({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Cities.CarLogo = function CitiesCarLogo({...restProps}) {
    return <CarLogo {...restProps} />
}

Cities.Title = function CitiesTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Cities.ButtonContainer = function CitiesButtonContainer({children, ...restProps}) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Cities.Group = function CitiesGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Cities.Button = function CitiesButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

export default Cities
