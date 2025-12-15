import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/apiMutation";
import { useUserStore } from "../../utils/userStore";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LiaOpencart } from "react-icons/lia";

const ErrorDisplay = ({ message }) => {
  return message ? (
    <div className="mb-4 px-3 py-2 bg-red-100 border border-red-400 rounded-md text-red-700 shadow-sm">
      <p className="mt-1 text-xs text-red-500 font-medium">{message}</p>
    </div>
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
  const { setUser, setToken } = useUserStore.getState();

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
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const loginResponse = await LoginUser(formData);
      console.log("Login successful! Response:", loginResponse);
      setUser(loginResponse.data.data);
      setToken(loginResponse.data.token);
      navigate("/");
    } catch (error) {
      console.error(
        "API Error:",
        error.response?.data?.message || error.message
      );
      setApiError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getInputClass = fieldName =>
    errors[fieldName]
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "border-gray-600 focus:ring-purple-500 focus:border-purple-500";

  return (
    <div className="w-full h-screen bg-black flex flex-col font-sans">
      <header className="p-6 absolute top-0 left-0 z-10">
        <div className="flex items-center space-x-2 text-purple-400">
          <LiaOpencart className="w-6 h-6" />
          <h1 className="text-xl font-bold tracking-wider">Aroura</h1>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-8 mx-4 transition duration-500 hover:shadow-xl hover:shadow-purple-900/50">
          <h2 className="text-3xl font-extrabold mb-8 text-white text-center">
            Welcome Back
          </h2>

          <ErrorDisplay message={apiError} />

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none text-base transition bg-gray-800 text-white placeholder-gray-500 ${getInputClass(
                  "email"
                )}`}
              />
              <ErrorDisplay message={errors.email} />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300">
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
                  className={`block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none text-base pr-10 transition bg-gray-800 text-white placeholder-gray-500 ${getInputClass(
                    "password"
                  )}`}
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer hover:text-purple-400 transition"
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
                  className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer font-medium"
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
                <Flex align="center" gap="middle">
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{ fontSize: 25, color: "white" }}
                        spin
                      />
                    }
                  />
                  Logging in...
                </Flex>
              ) : (
                "Log In"
              )}
            </button>

            <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
              Don't have an account yet?
              <span
                className="text-purple-400 font-medium hover:text-purple-300 ml-1 cursor-pointer hover:underline"
                onClick={() => navigate("/register")}>
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
