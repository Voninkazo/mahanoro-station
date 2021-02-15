import React from 'react'
import { useSelector } from 'react-redux';

import Page from '../icons/page.svg';

function AccountContainer() {
    const user = useSelector(state => state.user);
    console.log(user);

    return (
        <div>
            <img src={Page}/>
            <h3>My account:</h3>
            <p>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
            </p>
           <div>
               <h4>MY PERSONAL INFORMATIONS:</h4>
               <form>
                   <ul>
                       <li>
                           <label>First Name</label>
                           <input type="text" name="firstName" id="firstName" value={user.firstName}/>
                       </li>
                       <li>
                        <label>Last Name</label>
                            <input type="text" name="lastName" id="lastName" value={user.lastName}/>
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" value={user.phoneNumber}/>
                        </li>
                   </ul>
                   <button>Update</button>
               </form>
           </div>
           <div>
               <h4>MY BOOKINGS: </h4>
               <div>
               </div>
           </div>
        </div>
    )
}

export default AccountContainer
