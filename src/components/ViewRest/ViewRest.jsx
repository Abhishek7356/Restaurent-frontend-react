import React, { useEffect, useState } from 'react'
import './ViewRest.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
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
        const response = await axios.get(`http://localhost:3001/restaurants/${id}`);
        setRestaurentDetails(response.data)
        console.log(restaurentDetails);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='outerDiv'>

            <div className='viewRestContainer'>
                {/* image */}
                <img className='shadow' src={restaurentDetails.photograph} alt="" style={{ width: '500px', margin: '20px 0 20px 150px', height: '500px', objectFit: 'cover', borderRadius: '10px' }} />
                <div className='innerDiv'>
                    <ListGroup>
                        <ListGroup.Item>Name : {restaurentDetails.name}</ListGroup.Item>
                        <ListGroup.Item>Address : {restaurentDetails.address}</ListGroup.Item>
                        <ListGroup.Item>Cuisine Type : {restaurentDetails.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item>Neighborhood : {restaurentDetails.neighborhood}</ListGroup.Item>
                        <ListGroup.Item><Restop operatingHours={restaurentDetails.operating_hours} /></ListGroup.Item>
                        {/* <ListGroup.Item><RestReview/></ListGroup.Item> */}
                        {/* <ListGroup.Item>Name : {restaurentDetails.name}</ListGroup.Item> */}
                    </ListGroup>

                </div>
            </div>
            <RestReview reviews={restaurentDetails.reviews} />
        </div>
    )
}

export default ViewRest
