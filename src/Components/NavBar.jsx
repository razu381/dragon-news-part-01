import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
function NavBar() {
  return (
    <div className="grid grid-cols-3 w-full mt-5 items-center">
      <div></div>
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
        <img src={user} alt="" />
        <button className="bg-[#1E1E1E] text-white py-2 px-3">Login</button>
      </div>
    </div>
  );
}

export default NavBar;
