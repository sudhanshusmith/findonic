import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';



import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import RootLayout from './pages/RootLayout/RootLayout';
import FormikContainer from './pages/Posting/FormikContainer';
import ErrorPage from './util/components/ErrorPage/ErrorPage';

import './bootstrap.css'
import './index.css';
import Posting from './pages/Posting/Posting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "news/",
        element: <News />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "posting/",
        element: <FormikContainer />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
