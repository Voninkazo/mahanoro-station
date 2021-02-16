import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MyAccount from '../components/myAccount';

import Page from '../icons/page.svg';

function AccountContainer() {
    const user = useSelector(state => state.user);
    console.log(user);

    const chosenSeats = useSelector(state => state.chosenSeats);
    console.log(chosenSeats);

    const bookedTrips = useSelector(state => state.bookedTrips);
    console.log(bookedTrips);

    const trips = useSelector(state => state.trips);

    const {accountId} = useParams();
    console.log(accountId);

    const myBooking = trips.find(booking => booking.id == accountId);
    console.log(myBooking);

    return (
        <MyAccount>
            <MyAccount.PageLogo src={Page}/>
            <MyAccount.Title>My account:</MyAccount.Title>
            <MyAccount.UserInfo>
                <MyAccount.FirstName>{user.firstName}</MyAccount.FirstName>
                <MyAccount.LastName>{user.lastName}</MyAccount.LastName>
            </MyAccount.UserInfo>
           <MyAccount.Pane>
               <MyAccount.SubTitle>MY PERSONAL INFORMATIONS:</MyAccount.SubTitle>
               <MyAccount.Form>
                   <MyAccount.InputContainer>
                       <MyAccount.ListItem>
                           <MyAccount.Label>First Name</MyAccount.Label>
                           <MyAccount.InputText type="text" name="firstName" id="firstName" value={user.firstName}/>
                       </MyAccount.ListItem>
                       <MyAccount.ListItem>
                        <label>Last Name</label>
                            <MyAccount.InputText type="text" name="lastName" id="lastName" value={user.lastName}/>
                        </MyAccount.ListItem>
                        <MyAccount.ListItem>
                            <label>Phone Number</label>
                            <MyAccountMyAccount.ListItemnputText type="text" name="phoneNumber" id="phoneNumber" value={user.phoneNumber}/>
                        </MyAccount.ListItem>
                   </MyAccount.InputContainer>
                   <MyAccount.ButtonSubmit>Update</MyAccount.ButtonSubmit>
               </MyAccount.Form>
           </MyAccount.Pane>
           <MyAccount.Pane>
               <MyAccount.SubTitle>MY BOOKINGS: </MyAccount.SubTitle>
               <MyAccount.Group>
                  <p>{myBooking?.destination}</p>
                   <p>{chosenSeats.length}</p>
               </MyAccount.Group>
           </MyAccount.Pane>
        </MyAccount>
    )
}

export default AccountContainer
