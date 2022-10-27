import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const singleCourse = useLoaderData();
    const {name} = singleCourse;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CheckOut;