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
        const response = await axios.get('https://restaurent-backend-k0wg.onrender.com/restaurants');
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
        <div>
            <img className='hero' src="https://images.creativemarket.com/0.1.0/ps/5224591/1160/772/m1/fpnw/wm0/restaurant-facebook-cover-.png?1539864465&s=fcfb3bd1feeedccfa1f011d54c8347cd" alt="" />
            <div className='allRestaurents shadow bg-light rounded'>
                {!loading ? allRestaurents :
                    <MDBSpinner className='mx-2 my-5' color='info'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                }
            </div>
        </div>
    )
}
export default AllRest