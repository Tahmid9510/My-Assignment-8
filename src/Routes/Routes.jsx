import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:<ErrorPage></ErrorPage>,//Hole page will show
    children:[
    {
     path: "/",
     element: <Home></Home>,
    },
    {
        path:"*",
        element: <ErrorPage></ErrorPage>
    },


    {
    path: "/Apps",
    element: <Apps></Apps>,
    },
    ]
  },
  
  

]);


