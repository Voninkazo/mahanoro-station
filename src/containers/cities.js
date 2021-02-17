import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Car from '../images/car.jpg';

import Cities from '../components/cities';
// import {getData} from '../actions/data';

function CitiesContainer() {
  const destinations = useSelector(state => state.destinations);

    return (
        <Cities>
            <Cities.Group>
                <Cities.CarLogo src={Car} alt="Car" />
                <Cities.Title>Where are you going?</Cities.Title>
            </Cities.Group>
            <Cities.ButtonContainer>
            {
                destinations.map(city => {
                    return (
                    <Link to={`/${city.city}`}  key={city.id}>
                        <Cities.Button >{city.city}</Cities.Button>
                    </Link>
                    )
                })
            }
        </Cities.ButtonContainer>
         </Cities>
    )
}

 export default CitiesContainer

