import React from 'react'

import {Container, Button} from './styles/cities';

function Cities({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Cities.Button = function CitiesButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

export default Cities
