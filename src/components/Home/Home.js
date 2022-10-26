import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const courses = useLoaderData();

  return (
    <div className="home-bg">
      <div className="d-flex text-center text-white justify-content-center flex-column align-items-center h-100">
        <h4>Enjoying with techHero, Best learning platform</h4>
        <h1>Find your best career and get opportunity for your future</h1>
        <p>World class learning for anyone, anyWhere for increasing Knowledge. let your creativity shine and start brighting your future today and impress your audiences</p>
       <Link to='/courses'>
       <button className="btn btn-primary">EXPLORE COURSES</button>
       </Link>
      </div>
    </div>
  );
};

export default Home;
