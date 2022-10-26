import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import "./Course.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="row">
      <div className="col-md-2 left-nav">
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </div>
      <div className="col-md-10">
        <div className="row">
          {courses.map((singleCourse) => (
            <Card key={singleCourse.id} singleCourse={singleCourse}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
