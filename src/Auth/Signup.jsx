import React, { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";

function Signup() {
  let { setUser, createUser } = useContext(AuthContext);
  let [error, setError] = useState({});

  function handleSignUp(e) {
    e.preventDefault();
    let name = e.target.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "Name must be longer than 4 characters" });
      return;
    }

    let photo = e.target.photo.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;

    createUser(email, pass)
      .then((res) => {
        setUser(res.user);
        console.log("user with email" + res.user.email + " created");
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            {error.name && (
              <label className="label">
                <span className="label-text text-center text-red-500 p-5">
                  {error.name}
                </span>
              </label>
            )}
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
