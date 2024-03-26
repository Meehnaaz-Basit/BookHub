import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Book from "./components/Book.jsx";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import ReadBook from "./components/ListedBook/ReadBook.jsx";
import Wishlist from "./components/ListedBook/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <Book></Book>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "",
            element: <ReadBook></ReadBook>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
