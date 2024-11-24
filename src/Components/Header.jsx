import moment from "moment/moment";
import Marquee from "react-fast-marquee";

import logo from "../assets/logo.png";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img src={logo} alt="" />;
      <h3 className="text-gray-700">Journalism Without Fear or Favour</h3>
      <h3>{moment().format("dddd, MMMM Do YYYY")}</h3>
      <div className="flex gap-5 bg-slate-100 mt-5 py-3">
        <button className="bg-red-700 py-2 px-10 text-white ml-2">
          Latest
        </button>
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perspiciatis aspernatur ad consequatur facilis eaque, nobis cum aut
          explicabo qui ducimus officiis obcaecati unde dignissimos dolorum
          sapiente eum accusantium ullam.
        </Marquee>
      </div>
      <NavBar></NavBar>
    </div>
  );
}

export default Header;
