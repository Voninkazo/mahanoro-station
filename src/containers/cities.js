import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Cities from '../components/cities';
// import {getData} from '../actions/data';

function CitiesContainer() {
  const destinations = useSelector(state => state.destinations);

    return (
        <Cities>
            {
                destinations.map(city => {
                    return (
                    <Link to={`/${city.city}`}  key={city.id}>
                        <Cities.Button >{city.city}</Cities.Button>
                    </Link>
                    )
                })
            }
         </Cities>
    )
}

 export default CitiesContainer

