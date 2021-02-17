import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MyAccount from '../components/myAccount';

import {setAccount, setFirstName, setLastName, setPhoneNumber} from '../actions/account';


import Page from '../icons/page.svg';
import {cancelTrip} from '../actions/seats';

function AccountContainer() {
    const account = useSelector(state => state.account);
    console.log(account);

    const bookedTrips = useSelector(state => state.bookedTrips);
    console.log(bookedTrips)

    const dispatch = useDispatch();

    const upDatedAccount = {
        firstName: account.firstName,
        lastName: account.lastName,
        phoneNumber: account.phoneNumber,
        bookings: account.bookings
    }

    const totalPrice = useSelector(state => state.seats.totalPrice);
    console.log(totalPrice);

    const bookedSeats = useSelector(state => state.seats.bookedSeats);
    console.log(bookedSeats);

    return (
        <MyAccount>
            <MyAccount.PageLogo src={Page}/>
            <MyAccount.Title>My account:</MyAccount.Title>
            <MyAccount.UserInfo>
                <MyAccount.FirstName>{account.firstName}</MyAccount.FirstName>
                <MyAccount.LastName>{account.lastName}</MyAccount.LastName>
            </MyAccount.UserInfo>
           <MyAccount.Pane>
               <MyAccount.SubTitle>MY PERSONAL INFORMATIONS:</MyAccount.SubTitle>
               <MyAccount.Form onSubmit={(e) => {
                   e.preventDefault();
                   dispatch(setAccount(upDatedAccount))
                   }}>
                   <MyAccount.InputContainer>
                       <MyAccount.ListItem>
                           <MyAccount.Label>First Name</MyAccount.Label>
                           <MyAccount.InputText type="text"  value={account.firstName} onChange={(e) => dispatch(setFirstName(e.target.value))}/>
                       </MyAccount.ListItem>
                       <MyAccount.ListItem>
                        <MyAccount.Label>Last Name</MyAccount.Label>
                            <MyAccount.InputText type="text"  value={account.lastName} onChange={(e) => dispatch(setLastName(e.target.value))}/>
                        </MyAccount.ListItem>
                        <MyAccount.ListItem>
                            <MyAccount.Label>Phone Number</MyAccount.Label>
                            <MyAccount.InputText type="text" value={account.phoneNumber} onChange={(e) => dispatch(setPhoneNumber(e.target.value))}/>
                        </MyAccount.ListItem>
                   </MyAccount.InputContainer>
                   <MyAccount.ButtonSubmit type="submit">Update</MyAccount.ButtonSubmit>
               </MyAccount.Form>
           </MyAccount.Pane>
           <MyAccount.Pane>
               <MyAccount.SubTitle>MY BOOKINGS: </MyAccount.SubTitle>
               <MyAccount.Group>
                  {
                      bookedTrips.map(trip => {
                          return (
                              <div key={trip.id}>
                                  <div>
                                    <p>{trip.destination}</p>
                                    <p>{new Date(trip.departureTime).toLocaleDateString()}, {new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}</p>
                                  </div>
                                  <div>
                                    <p>{bookedSeats}seats</p>
                                    <p>{totalPrice}Ar</p>
                                  </div>
                                  <div>
                                      <button type="button" onClick={() => dispatch(cancelTrip(trip.id))}>Cancel</button>
                                  </div>
                              </div>
                          )
                      })
                  }
               </MyAccount.Group>
           </MyAccount.Pane>
        </MyAccount>
    )
}

export default AccountContainer
