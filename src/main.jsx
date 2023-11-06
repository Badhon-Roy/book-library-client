import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import AddBook from './Pages/AddBook/AddBook';
import AllBooks from './Pages/AllBooks/AllBooks';
import BorrowedBooks from './Pages/BorrowedBooks/BorrowedBooks';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Books from './Pages/Books/Books';
import BookDetails from './Components/BookDetails/BookDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateBooks from './Pages/UpdateBooks/UpdateBooks';
import ErrorPage from './ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/addBook",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "/allCategoryBooks",
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        loader : () => fetch('http://localhost:5000/allBooks')
      },
      {
        path: "/borrowedBooks",
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/books/:category",
        element: <Books></Books>
      },
      {
        path: "/allBooks/:id",
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
      },
      {
        path : "/updateBooks/:id",
        element : <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/allBooks/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
