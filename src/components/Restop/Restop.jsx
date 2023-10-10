import React from 'react'
import './Restop.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({ operatingHours }) {

    // console.log("hey", operatingHours);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Oprating hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Restaurent timing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday : {operatingHours?.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday : {operatingHours?.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday : {operatingHours?.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday : {operatingHours?.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday : {operatingHours?.Friday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Restop