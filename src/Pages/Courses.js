import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <Container>
            <Row>
                <Col lg='2'></Col>


                <div className='border rounded shadow-lg'>
                    <h2 className='text-success'>This is category section</h2>
                    <div>
                        {
                            categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}><Button variant="outline-primary">{category.name}</Button></Link></p>)
                        }
                    </div>
                </div >
                <Col lg='10'></Col>
            </Row> </Container>
    );
};

export default Courses;