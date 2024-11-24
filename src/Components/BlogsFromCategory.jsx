import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function BlogsFromCategory() {
  let { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <div className="card bg-base-100 shadow-xl mt-4">
          <figure className="px-10 pt-10">
            <img src={post.image_url} alt={post.title} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.details.slice(1, 200)}</p>
            <div className="card-actions">
              <Link to={`/news/${post._id}`}>
                <button className="btn btn-primary">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogsFromCategory;
