import React from 'react'
import { Container, Title, Wrapper, IconTick, IconClose, Heading, Text, Button } from './styles/modal';

function Modal({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Modal.Wrapper = function ModalWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Modal.Heading = function ModalHeading({children, ...restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}

Modal.Title = function ModalTitle({children, ...restProps}) {
        return <Title {...restProps}>{children}</Title>
}

Modal.IconTick = function ModalIconTick({...restProps}) {
    return <IconTick {...restProps} />
}

Modal.IconClose = function ModalIconClose({...restProps}) {
    return <IconClose {...restProps} />
}

Modal.Text = function ModalText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Modal.Button = function ModalButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

export default Modal
