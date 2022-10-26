import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light px-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-between"
          id="navbarTogglerDemo01"
        >
          <div>
            <Link className="navbar-brand">
              <img style={{ width: "60px" }} src={logo} alt="logo" />
            </Link>
            <Link className="navbar-brand" to="/">
              TechHero
            </Link>
          </div>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/courses"}>
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
