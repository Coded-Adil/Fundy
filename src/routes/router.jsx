import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Donate from "../pages/Donate";
import DonationDetails from "../pages/DonationDetails";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import ProvateRoute from "./ProvateRoute";
import Dashboard from "../components/Dashboard";
import UpdateProfile from "../components/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/help',
                element: <h1>Help</h1>
            },
            {
                path: '/dashboard',
                element:
                    <ProvateRoute>
                        <Dashboard />
                    </ProvateRoute>
            },
            {
                path: '/update',
                element:
                    <ProvateRoute>
                        <UpdateProfile />
                    </ProvateRoute>
            },
            {
                path: '/donate',
                element: <Donate />,
                loader: () => fetch('../donationCampaigns.json'),
            },
            {
                path: '/donate/:id',
                element: (
                    <ProvateRoute>
                        <DonationDetails />
                    </ProvateRoute>
                ),
                loader: () => fetch('../donationCampaigns.json'),
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
])

export default router;