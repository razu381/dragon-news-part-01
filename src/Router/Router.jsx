import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../Layout/Home";
import BlogsFromCategory from "../Components/BlogsFromCategory";
import BlogSingle from "../Layout/BlogSingle";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import PrivateRoute from "./PrivateRoute";
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
    element: (
      <PrivateRoute>
        <BlogSingle></BlogSingle>
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
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
