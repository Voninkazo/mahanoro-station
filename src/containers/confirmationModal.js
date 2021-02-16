// import React from 'react';
// import { useDispatch, useSelector} from 'react-redux';

// import Modal from '../components/modal';
// import {displayModal} from '../actions/modal';
// import {confirmBooking} from '../actions/seats';

// import IconClose from '../icons/icon_close.svg';
// import TickIcon from '../icons/tick.svg';
// import { Link } from 'react-router-dom';

// function ConfirmationModalContainer() {
//     const choseSeats = useSelector(state => state.choseSeats);

//     const dispatch = useDispatch();

    // function handleClicks() {
    //     dispatch(confirmBooking());
    //     dispatch(displayModal(false))
    // }

//     return (
//         // <Modal>
//         //     <Modal.Wrapper>
//         //         <Modal.IconClose src={IconClose} onClick={() => dispatch(displayModal(false))} alt="Close" />
//         //         <Modal.Heading>
//         //             <Modal.IconTick src={TickIcon} />
//         //             <Modal.Title>BOOKING CONFIRMED!</Modal.Title>
//         //         </Modal.Heading>
//         //         <Modal.Text>
//         //             Thank you for trusting our services. Your booking has been added to your account. You can review it there.
//         //         </Modal.Text>
//         //         <Link to="/account/accountId/">
//         //             <Modal.Button 
//         //                 type="button"
//         //                 onClick={() => handleClicks()}
//         //                 >
//         //                 Checking your account
//         //             </Modal.Button>
//         //         </Link>
//         //     </Modal.Wrapper>
//         // </Modal>
//     )
// }

// export default ConfirmationModalContainer
