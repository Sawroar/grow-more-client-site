import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaGoogle, FaGithub, } from 'react-icons/fa';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate('/')
            }).catch(error => { console.error(error); })


    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => console.log(error))
    }

    return (
        <Container>
            <Row>

                <Col lg='4'></Col>
                <Col lg='4' className='border rounded shadow-lg'><div className='container'>
                    <Form onSubmit={handleSubmit} className='container'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-5'>Email address</Form.Label>
                            <Form.Control name='email' required type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' required type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Text className="text-danger">

                        </Form.Text>
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                        <br />
                        <ButtonGroup vertical className='mt-2 mb-5'>
                            <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary' ><div className='d-flex align-items-center '><FaGoogle className='mr-5'></FaGoogle>Log in with Google</div> </Button>
                            <Button variant='outline-dark'><FaGithub></FaGithub>Log in with Github</Button>
                        </ButtonGroup>
                    </Form>
                </div></Col>




                <Col lg='4'></Col>
            </Row>
        </Container>

    );
};

export default Login;