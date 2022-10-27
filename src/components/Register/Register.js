import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('')

  const handelSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
       setError('')
        form.reset();
      })
      .catch((error) => {
        setError(error.message)
      });
  };
  return (
    <div className="w-50 mx-auto mt-4 ">
      <form onSubmit={handelSubmit} className="card p-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Full Name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Photo URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="photo URL"
            name="photoURL"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <p className="mt-3 text-center">
          Already have an Account ? <Link to="/login">Login</Link>
        </p>
        <div id="emailHelp" className="text-danger mt-3 text-center">
         {error}
        </div>
      </form>
    </div>
  );
};

export default Register;
