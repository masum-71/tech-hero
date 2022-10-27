import React from "react";
import { Link } from "react-router-dom";

const Card = ({ singleCourse }) => {
  const { id, name, img, description } = singleCourse;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={img}
          style={{ height: "150px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 150) + "..."}</p>
          <Link to={`/course/${id}`} className="btn btn-primary">
            Course Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
