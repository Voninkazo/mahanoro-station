import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Cities from '../components/cities';
// import {getData} from '../actions/data';

function CitiesContainer() {
  const destination = useSelector(state => state.destination);

    // const mapData = cities.map((obj, index) => obj.destination);
    // const removeDuplicatedCitieNames = mapData.filter((destination, index) => mapData.indexOf(destination) === index)
    // const newCityArr = removeDuplicatedCitieNames;
    return (
        <Cities>
            {
                destination.map(dest => {
                    return (
                    <Link to={`/${dest}`}  key={dest}>
                        <Cities.Button 
                            value={dest}
                            >
                            {dest}
                        </Cities.Button>
                    </Link>
                    )
                })
            }
         </Cities>
    )
}

 export default CitiesContainer

