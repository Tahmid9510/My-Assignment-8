import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading....</p>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Apps",
                element: <Apps></Apps>,
            },
            {
                path: "/InstalledApps",
                element: <InstalledApps></InstalledApps>
            },
            {
                path: "/AppDetails/:id",
                element: <AppDetails></AppDetails>
            },
        ]
    },



]);


