import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div>
            <h2 className='text-center'>Some Questions with it's Answers</h2>
            <Accordion defaultActiveKey="0" className='text-center shadow-lg mb-5 mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        CORS full meaning is Cross Origin Resource Sharing. CORS is an HTTP-header that allows a server to indicate any origins other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is more reliable than other option. Because it's a Google product. Google is more secured and trusty other than any. And also Firebase is developer+user friendly. That's why I am using Firebase. ML-SQL Server, Auth0, Okta, Amazon Cognito are also famous for authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the difference is that redirect URL and authenticate condition. If the user is not authenticated or unauthorized he will be redirected to the login page or which conditional path given by developer. The user can only access the authenticated routes if he is authenticated or authorized.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node is JavaScript runtime. Node is a used as back-end service while javascript works on the server-side. This way JavaScript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;