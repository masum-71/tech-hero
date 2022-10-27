import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../../App";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { Image } from "react-bootstrap";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(() => {})
  }
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
          <div className="d-flex align-items-center">
            {user?.uid ? (
              <>
                <span>{user?.displayName}</span>
                {user?.photoURL ? (
                  <Image
                    data-toggle="tooltip"
                    data-placement="top"
                    title={user.displayName}
                    className="ms-2 curser-pointer"
                    style={{ height: "40px", cursor: "pointer" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt data-toggle="tooltip"
                  data-placement="top"
                  title={user.displayName}
                  className="ms-2 curser-pointer"></FaUserAlt>
                )}
                <button onClick={handleLogOut} className="btn btn-danger ms-2">LogOut</button>
              </>
            ) : (
              <>
                <li className="nav-item list-unstyled">
                  <Link className="nav-link list" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            <Switch onChange={toggleTheme} checked={theme === "dark"}></Switch>
            <label htmlFor="">{theme === "light" ? "Light" : "Dark"}</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
