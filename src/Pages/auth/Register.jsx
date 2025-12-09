import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { Flex, Spin } from "antd";
import { LuLoaderCircle } from "react-icons/lu";
import { LoadingOutlined } from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    profilePicture: null,
    fullName: "",
    age: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = e => {
    const { name, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleShowPass = () => {
    setShowPassword(prev => !prev);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is Required"),
    age: Yup.number()
      .min(18, "You must be above 18")
      .max(40, "You are over aged")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .min(11, "Phone number is not complete")
      .required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    profilePicture: Yup.mixed().required("Please add your image"),
  });

  const API_BASE_URL = "https://product-api-mrbb.onrender.com";
  const validateForm = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await axios.post(`${API_BASE_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Registration successful!");
      setLoading(false);
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      if (error.name === "ValidationError") {
        console.log(error.inner);
        toast.error("Validation errors:", error.inner);
        setLoading(false);
      } else {
        toast.error("API error:", error.response?.data || error.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-purple-500 to-purple-400 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Create Your Account
        </h2>
        <div className="flex flex-col items-center mb-4">
          <label
            htmlFor="profileImage"
            className="cursor-pointer relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 flex items-center justify-center bg-gray-50 hover:border-indigo-500">
            {formData.profilePicture ? (
              <img src={URL.createObjectURL(formData.profilePicture)} alt="" />
            ) : (
              <span className="text-gray-400 text-sm">Upload</span>
            )}
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              name="profilePicture"
              onChange={handleChange}
              className="hidden"
            />
          </label>
          <p className="text-xs text-gray-500 mt-2">Upload profile picture</p>
        </div>

        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your Age"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a strong password"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm pr-10"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                {showPassword ? (
                  <FaRegEye onClick={handleShowPass} />
                ) : (
                  <FaRegEyeSlash onClick={handleShowPass} />
                )}
              </span>
            </div>
          </div>

          <button
            onClick={validateForm}
            className="w-full mt-6 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in-out">
            {loading ? (
              <Flex align="center" gap="middle">
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: 25, color: "black" }}
                      spin
                    />
                  }
                />
                Registering...
              </Flex>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
