import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Category = () => {
    const allCourse = useLoaderData()

    return (
        <div className='border'>

            {
                allCourse.map(course => <Course key={course._id} course={course}></Course>)
            }
        </div >
    );
};

export default Category;