
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import SkillDetails from "../pages/SkillDetails";
import MyProfile from "../pages/MyProfile";
import AllSkills from "../pages/AllSkills";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-skills",
                element: <AllSkills />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },

            // ✅ Protected Route for Skill Details
            {
                path: "/skill-details/:id",
                element: <PrivateRoute><SkillDetails /></PrivateRoute>
            },

            // ✅ Protected Route for My Profile
            {
                path: "/my-profile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },
            
        ]
    },
]);

export default router;