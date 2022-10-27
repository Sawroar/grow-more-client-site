import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div>
            <h2 className='text-center'>Frequently Asked Qustions with it's Answer</h2>
            <Accordion defaultActiveKey="0" className='text-center shadow-lg mb-5 mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can we get the course access?</Accordion.Header>
                    <Accordion.Body>
                        By purchasing premium you can get access to our course. For getting access you have to visit our website. Then pay the amount for your desired course. After your successful payment, you will get access.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does this course's support work?</Accordion.Header>
                    <Accordion.Body>
                        Well. We provide support to our students with their problems. Our instructors are always open for support.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is this course access lifetime?</Accordion.Header>
                    <Accordion.Body>
                        Yes. Our content access is life time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Is there any discount now?</Accordion.Header>
                    <Accordion.Body>
                        No. If is there will be available any discount, we will give the update on our website. So keep your eye open.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;