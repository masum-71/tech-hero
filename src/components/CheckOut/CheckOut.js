import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const singleCourse = useLoaderData();
  const { name, img, description, id, price } = singleCourse;
  return (
    <div className="card w-50 mx-auto mt-5">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h1>Course Name: {name}</h1>
        <h4>Course Id: {id}</h4>
        <h4>Course Price: ${price}</h4>
        <p className="card-text">
          {" "}
          <strong>Description:</strong> {description}
        </p>
        <Link className="btn btn-primary">Start Now</Link>
      </div>
    </div>
  );
};

export default CheckOut;
