import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import JobDetails from "./components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
        loader: async ({ params }) => fetch(`jobData.json/${params.id}`),
      },

      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
