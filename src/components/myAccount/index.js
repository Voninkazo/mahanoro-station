import React from 'react'
import {
    Container, PageLogo, Title, UserInfo, FirstName, LastName, Wrapper, Pane, PersonalInfo, Group, SubTitle,
    Form, InputContainer, InputText, Label, ListItem, ButtonSubmit, Bookings,
 }
 from './styles/myAccount';

function MyAccount({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

MyAccount.PageLogo = function  MyAccountPageLogo({...restProps}) {
    return <PageLogo {...restProps} />
}

MyAccount.Title = function  MyAccountTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

MyAccount.UserInfo = function  MyAccountUserInfo({children, ...restProps}) {
    return <UserInfo {...restProps}>{children}</UserInfo>
}

MyAccount.FirstName = function  MyAccountFirstName({children, ...restProps}) {
    return <FirstName {...restProps}>{children}</FirstName>
}

MyAccount.LastName = function  MyAccountLastName({children, ...restProps}) {
    return <LastName {...restProps}>{children}</LastName>
}

MyAccount.Wrapper = function  MyAccountWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

MyAccount.Pane = function  MyAccountPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

MyAccount.PersonalInfo = function  MyAccountPersonalInfo({children, ...restProps}) {
    return <PersonalInfo {...restProps}>{children}</PersonalInfo>
}

MyAccount.SubTitle = function  MyAccountSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

MyAccount.Form = function  MyAccountForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

MyAccount.InputContainer = function  MyAccountInputContainer({children, ...restProps}) {
    return <InputContainer {...restProps}>{children}</InputContainer>
}

MyAccount.ListItem = function  MyAccountListItem({children, ...restProps}) {
    return <ListItem {...restProps}>{children}</ListItem>
}

MyAccount.Label = function  MyAccountLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

MyAccount.InputText = function  MyAccountInputText({children, ...restProps}) {
    return <InputText {...restProps}>{children}</InputText>
}

MyAccount.ButtonSubmit = function  MyAccountButtonSubmit({children, ...restProps}) {
    return <ButtonSubmit {...restProps}>{children}</ButtonSubmit>
}

MyAccount.Bookings = function  MyAccountBookings({children, ...restProps}) {
    return <Bookings {...restProps}>{children}</Bookings>
}

MyAccount.Group = function  MyAccountGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

// MyAccount.Title = function  MyAccountTitle({children, ...restProps}) {
//     return <Title {...restProps}>{children}</Title>
// }

export default MyAccount
