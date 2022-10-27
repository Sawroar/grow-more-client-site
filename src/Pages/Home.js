import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../public/grow.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3><span className='text-primary fs-1 fw-bold '>Grow</span> <span className='text-success fs-1 fw-bold me-2'>More</span></h3>
                        <p>  We Provide Valuable Personal Development And Life Support To Our Students</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../public/grow.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../public/grow.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;