import { lazy } from "react";
const Home = lazy(() => import("../Components/Home"));
// import ProtectedRoute from "../Protected/ProtectedRoute";
const Admin = lazy(() => import("../Components/sections/Admin"));
const Login = lazy(() => import("../Components/sections/Admin/Login"));
const Weather = lazy(() => import("../Components/Weather"));
const PageNotFound = lazy(() => import("../Components/PageNotFound"));
const OpenAi = lazy(() => import(".././Components/AI/OpenAi"));

const allRoutes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/weather",
        element: Weather,
    },
    {
        path: "/login",
        element: Login,
    },

    // {
    //     path: "/open-Ai",
    //     element: OpenAi,
    // },

    { path: "/admin-dashboard", element: Admin, protected: true },

    {
        path: "*",
        element: PageNotFound,
    },
];

export default allRoutes;
