import React from 'react'
import './RestReview.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RestReview({ reviews }) {
    console.log(reviews);

    let restReviews = reviews?.map((item) => {
        return (
            <div>
                <Card.Text>
                    <h5>{item?.name} : ({item?.date})</h5>
                    <p className='text-end'><i class="fa-solid fa-star text-warning"></i> {item?.rating}</p>
                    <p>{item?.comments}</p>                   
                </Card.Text>
                <hr />
            </div>
        )
    })

    return (
        <div>
            <Card style={{margin:'60px 0'}}>
                <Card.Body>
                    <Card.Title className='text-center'>Restaurent review</Card.Title>
                    {restReviews}
                </Card.Body>
            </Card>
        </div >
    )
}

export default RestReview