import React, { useEffect, useState } from 'react'
import './AllRest.css'
import axios from 'axios'
import { MDBSpinner } from 'mdb-react-ui-kit';
import RestaurentCard from '../RestaurentCard/RestaurentCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AllRest() {

    //All restaurent details 
    const [restaurentData, setRestaurentData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/restaurants');
        setRestaurentData(response.data)
        console.log(restaurentData);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    let allRestaurents = restaurentData.map((item) => {
        return (
            <RestaurentCard item={item} />
        )
    })

    return (
        <div className='allRestaurents'>
            {!loading ? allRestaurents :
                <MDBSpinner className='mx-2 my-5' color='info'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            }
        </div>
    )
}
export default AllRest