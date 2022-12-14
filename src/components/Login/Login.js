import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { providerLogin, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
    .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div onSubmit={handleSubmit} className="w-50 mx-auto mt-4 ">
      <form className="card p-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Login
        </button>
        <p className="text-center">
          New in here ? <Link to="/register">Create an Account</Link>
        </p>
        <div id="emailHelp" className="text-danger mt-3 text-center">
          {error}
        </div>
      </form>
      <div>
        <div className="card mt-3">
          <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
            <FaGoogle className="text-white"></FaGoogle> Login with Google
          </button>
        </div>
        <div className="card mt-3">
          <button className="btn btn-secondary" onClick={handleGithubSignIn}>
            <FaGithub className="text-white"></FaGithub> Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
