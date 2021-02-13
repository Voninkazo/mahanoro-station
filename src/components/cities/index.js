import React from 'react'

import {Container} from './styles/cities';
function Cities({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

export default Cities
