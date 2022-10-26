import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category';

import Courses from '../Pages/Courses';


import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Outlet></Outlet>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;