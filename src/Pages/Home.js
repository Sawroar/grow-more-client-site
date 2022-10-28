import React from 'react';
import grow from './../../src/assets/grow.png'
import { Button, Col, Container, Row } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='6'> <img src={grow} alt="" /></Col>
                    <Col lg='6' className='mt-5'> <h1><span className='text-primary fs-1 fw-bold '>Grow</span> <span className='text-success fs-1 fw-bold me-2'>More</span>
                        We Provide Valuable Personal Development And Life Support To Our Students.</h1>
                        <p> you are looking for several courses that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.</p>
                        <Button variant="primary" className='mb-5' type="submit">
                            See Our Courses
                        </Button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;