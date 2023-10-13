import React, { useEffect, useState } from 'react'
import './ViewRest.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Restop from '../Restop/Restop';
import RestReview from '../RestReview/RestReview';

function ViewRest() {

    const [restaurentDetails, setRestaurentDetails] = useState({})

    // normal method
    const pathParameter = useParams()
    // console.log(pathParameter.id);

    // destructure parameter
    const { id } = pathParameter
    // console.log(id);

    const fetchData = async () => {
        const response = await axios.get(`https://restaurent-backend-k0wg.onrender.com/restaurants/${id}`);
        setRestaurentDetails(response.data)
        console.log(restaurentDetails);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='outerDiv bg-light shadow-lg my-5 pb-1'>

            <div className='viewRestContainer'>
                <img className='shadow vewRestImage' src={restaurentDetails.photograph} alt="" />
                <div className='innerDiv'>
                    <h3>{restaurentDetails.name}</h3>
                    <h5>Address : {restaurentDetails.address}</h5>
                    <h5>Cuisine Type : {restaurentDetails.cuisine_type}</h5>
                    <h5>Neighborhood : {restaurentDetails.neighborhood}</h5>
                    <Restop operatingHours={restaurentDetails.operating_hours} />
                </div>
            </div>
            <RestReview reviews={restaurentDetails.reviews} />
        </div>
    )
}

export default ViewRest
