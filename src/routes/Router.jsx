import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/auth/Register";
// import Login from "../Pages/auth/Login";
import ProfilePage from "../Pages/ProfilePage";
import VerifyOtp from "../Pages/auth/VerifyOtp";
import ForgotPassword from "../Pages/auth/ForgetPassword";
import VerifyEmail from "../Pages/auth/VerifyEmail";
import ResetPassword from "../Pages/auth/ResetPassword";
import Login from "../Pages/auth/Login";
import Checkout from "../Pages/Checkout";
import ProductPage from "../Pages/ProductPage";
import Wishlist from "../Pages/Wishlist";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);
