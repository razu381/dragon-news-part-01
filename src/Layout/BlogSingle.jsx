import React from "react";
import { useLoaderData } from "react-router-dom";
import RightNavbar from "../Components/RightNavbar";
import Header from "../Components/Header";

function BlogSingle() {
  let { data } = useLoaderData();
  data = data[0];
  return (
    <div className="">
      <Header></Header>
      <div className="grid grid-cols-12">
        <div className="right-section col-span-8 px-10 space-y-5">
          <h3>Dragon news</h3>
          <img src={data.image_url} alt="" />
          <h2 className="font-bold font-3xl">{data.title}</h2>
          <p>{data.details}</p>
        </div>
        <div className="col-span-4 mt-11">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
