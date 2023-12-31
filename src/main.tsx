import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/index.tsx";
import { Home } from "./components/Home/index.tsx";
import { About } from "./components/About/index.tsx";
import { PostItem } from "./components/PostItem/index.tsx";
import { PostAlterForm } from "./pages/postAlterForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <PostItem />,
      },
      {
        path: "/post/create",
        element: <PostAlterForm />,
      },
      {
        path: "/post/:id/edit",
        element: <PostAlterForm isEditable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
