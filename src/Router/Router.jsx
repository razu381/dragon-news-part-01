import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../Layout/Home";
import BlogsFromCategory from "../Components/BlogsFromCategory";
import BlogSingle from "../Layout/BlogSingle";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "/category/:Id",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.Id}`
          ),
        element: <BlogsFromCategory></BlogsFromCategory>,
      },
    ],
  },
  {
    path: "/news/:id",
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    element: <BlogSingle></BlogSingle>,
  },
  {
    path: "/careear",
    element: <div>This is careear section!</div>,
  },
  {
    path: "*",
    element: <div>Error, not found !</div>,
  },
]);

export default router;
