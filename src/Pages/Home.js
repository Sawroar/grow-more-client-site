import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
const Home = () => {
    return (
        <div><h1>This is Home</h1>
            <Container>
                <Row>
                    <Col><Image src={'../logo.svg'}></Image></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;