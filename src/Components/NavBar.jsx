import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/userImg.png";
import { AuthContext } from "../Auth/Provider/AuthProvider";
function NavBar() {
  let { user, logOut } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-3 w-full mt-5 items-center">
      <div>{user ? user?.email : ""}</div>
      <div className="flex">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/carrear">Carrear</Link>
          </li>
        </ul>
      </div>
      <div className=" flex ml-auto gap-3">
        <img src={userImg} alt="" />
        {user ? (
          <button
            onClick={logOut}
            className="bg-[#1E1E1E] text-white py-2 px-3"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="bg-[#1E1E1E] text-white py-2 px-3">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
