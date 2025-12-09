import React, { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData, setUserToken } from "../../utils/Features";

const LOGIN_API_URL = "https://product-api-mrbb.onrender.com/login";

const ErrorDisplay = ({ message }) => {
  return message ? (
    <p className="mt-1 text-xs text-red-500 font-medium">{message}</p>
  ) : null;
};

const validateForm = formData => {
  const errors = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Must be a valid email address";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    setApiError("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setApiError("");

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.error("Validation Errors:", validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const loginResponse = await axios.post(LOGIN_API_URL, formData);
      console.log("Login successful! Response:", loginResponse);
      dispatch(setUserData(loginResponse.data.data));
      dispatch(setUserToken(loginResponse.data.token));

      navigate("/");
    } catch (error) {
      console.error("API Error:", error.message);
      setApiError(
        error.message || "An unexpected error occurred during login."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen bg-linear-to-br from-purple-500 to-indigo-700 flex flex-col font-sans">
      <header className="p-6 absolute top-0 left-0 z-10">
        <div className="flex items-center space-x-2 text-white">
          <User className="w-6 h-6" />
          <h1 className="text-xl font-bold tracking-wider">AppBrand</h1>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 mx-4 transition duration-500 hover:shadow-3xl">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
            Welcome Back
          </h2>

          <ErrorDisplay message={apiError} />

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`mt-1 block w-full px-4 py-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-base transition`}
              />
              <ErrorDisplay message={errors.email} />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`block w-full px-4 py-2.5 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-base pr-10 transition`}
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer hover:text-purple-600 transition"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </span>
              </div>
              <ErrorDisplay message={errors.password} />
              <div className="text-right mt-1">
                <span
                  className="text-xs text-purple-600 hover:text-purple-700 cursor-pointer font-medium"
                  onClick={() => navigate("/forgot-password")}>
                  Forgot Password?
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white transition duration-300 ease-in-out ${
                isLoading
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 transform hover:scale-[1.01]"
              }`}>
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Log In"
              )}
            </button>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-sm text-gray-600">
              Don't have an account yet?
              <span
                className="text-purple-600 font-medium hover:text-purple-700 ml-1 cursor-pointer hover:underline"
                onClick={() => navigate("/")}>
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
