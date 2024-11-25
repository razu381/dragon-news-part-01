import React, { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  let { setUser, logInUser } = useContext(AuthContext);
  let [error, setError] = useState({});

  let location = useLocation();
  let locationData = location.state;
  let navigate = useNavigate();
  //console.log(locationData);

  function handleLogin(e) {
    e.preventDefault();

    let email = e.target.email.value;
    let pass = e.target.pass.value;

    logInUser(email, pass)
      .then((res) => {
        console.log(`New user Logged in  with email ${res.user.email}`);
        setUser(res.user);
        navigate(locationData ? locationData : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError({ ...error, login: "There's an error while logging in" });
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="pass"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          {error.login && (
            <h2 className="text-red-600 text-sm text-center p-3">
              {error.login}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
