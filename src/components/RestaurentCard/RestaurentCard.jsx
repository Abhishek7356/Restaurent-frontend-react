import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RestauretntCard.css'
import { Link } from 'react-router-dom';

function RestaurentCard(props) {

    return (
        <Link className='restCard' to={`/view/${props.item.id}`}>
            <Card className='shadow '>
                <Card.Img className='restaurentImg' variant="top" src={props.item.photograph} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {props.item.cuisine_type}
                    </Card.Text>
                    <Card.Text>
                        {props.item.address}
                    </Card.Text>
                    <Card.Text>
                        {props.item.neighborhood}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default RestaurentCard