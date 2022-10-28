import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Course = ({ course }) => {

    return (
        <Container >
            <Row>
                <Col lg='4'></Col>
                <Col lg='4' className='shadow-lg mt-2 rounded mb-1'>
                    <div className='d-flex align-items-center '>
                        <Card style={{}} className='p-2'>
                            <Card.Img variant="top" src={course.author.img} />
                            <Card.Body>
                                <Card.Title className=' fw-bolder'>{course.author.name}</Card.Title>
                                <Card.Text>


                                    <h6 className='fw-bold'> Instructor: {course.author.instructor}</h6>
                                    <h6 className='fw-bold'> Course Duration: {course.author.time}</h6>
                                </Card.Text>
                                <div className=' '>
                                    <h6 ><span className='fw-bold'> Course Details:</span>  {course.author.details}</h6>
                                    <Button variant="primary" className='text-center '>Get Premium Access</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </div >
                </Col>
                <Col lg='4'></Col>
            </Row></Container>
    );
};

export default Course;