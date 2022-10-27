import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { AuthContext } from '../assets/AuthProvider/AuthProvider';

import { Col, Container, Row } from 'react-bootstrap';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            }).catch(error => console.log(error))
    }
    return (
        <Container>
            <Row>
                <Col lg='4'></Col>
                <Col lg='4' className='border rounded shadow-lg'>



                    <Form onSubmit={handleSubmit} className='container'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-5'>Your Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' required type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Text className="text-danger">

                        </Form.Text>
                        <Button variant="primary" className='mb-5' type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
                <Col lg='4'></Col>

            </Row>
        </Container>
    );
};

export default Register;