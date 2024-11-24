import React from "react";
import Header from "../Components/Header";
import LeftNavBar from "../Components/LeftNavBar";
import { Outlet } from "react-router-dom";
import RightNavbar from "../Components/RightNavbar";

function Home() {
  return (
    <div>
      <Header></Header>
      <main className="grid grid-cols-12 w-full gap-2">
        <aside className="col-span-2">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-8 px-10">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-2">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
}
export default Home;
