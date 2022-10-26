import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div className='border'>
            <h2>This is category section{categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/:${category.id}`}><Button variant="outline-primary">{category.name}</Button></Link></p>)
                }
            </div>
        </div >
    );
};

export default LeftSideNav;