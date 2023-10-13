import React from 'react'
import './RestReview.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function RestReview({ reviews }) {
    console.log(reviews);

    let restReviews = reviews?.map((item) => {
        return (
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{item?.name} : ({item?.date}) -<i class="fa-solid ms-4 fa-star text-warning"></i> {item?.rating}</Accordion.Header>
                    <Accordion.Body>
                        {item?.comments}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            // <div>
            //     <Card.Text>
            //         <h5>{item?.name} : ({item?.date})</h5>
            //         <p className='text-end'><i class="fa-solid fa-star text-warning"></i> {item?.rating}</p>
            //         <p>{item?.comments}</p>                   
            //     </Card.Text>
            //     <hr />
            // </div>
        )
    })

    return (
        <div className='review'>
            <h4 className='mb-4'>Restaurent Review</h4>
            {restReviews}
        </div >
    )
}

export default RestReview