import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()

    const {id, name, img, description, price} = course;
    console.log(course)
    return (
        <div className="card text-center">
        <div className="card-header">
          <img style={{width: '100%'}} src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link className='btn btn-primary'>Purchase</Link>
        </div>
        <div className="card-footer text-muted">
          <p>Price: ${price}</p>
        </div>
      </div>
    );
};

export default Course;