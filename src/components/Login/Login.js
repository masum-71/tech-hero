import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
  return (
    <div className="w-50 mx-auto mt-4 ">
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
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <div className="card mt-3">
          <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
            <FaGoogle className="text-warning"></FaGoogle> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
