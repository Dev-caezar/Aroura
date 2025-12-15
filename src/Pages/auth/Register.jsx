import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LiaOpencart } from "react-icons/lia";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowPass = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data Submitted:", formData);
    navigate("/login");
  };

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center p-4">
      <header className="p-6 absolute top-0 left-0 z-10">
        <div className="flex items-center space-x-2 text-purple-400">
          <LiaOpencart className="w-6 h-6" />
          <h1 className="text-xl font-bold tracking-wider">Aroura</h1>
        </div>
      </header>
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl py-6 sm:py-4 px-8 hover:shadow-purple-500/50 transition-shadow">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-white text-center">
            Register
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="relative">
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder=" "
              className={`block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 peer
                         transition-colors duration-200 focus:bg-gray-800`}
            />
            <label
              htmlFor="fullName"
              className={`absolute text-sm text-gray-400 duration-200 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-500 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            formData.fullName.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 peer
                         transition-colors duration-200 focus:bg-gray-800`}
            />
            <label
              htmlFor="email"
              className={`absolute text-sm text-gray-400 duration-200 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-500 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            formData.email.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder=" "
              className={`block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 peer
                         transition-colors duration-200 focus:bg-gray-800`}
            />
            <label
              htmlFor="phoneNumber"
              className={`absolute text-sm text-gray-400 duration-200 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-500 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            formData.phoneNumber.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              className={`block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 peer pr-12
                         transition-colors duration-200 focus:bg-gray-800`}
            />
            <label
              htmlFor="password"
              className={`absolute text-sm text-gray-400 duration-200 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-500 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            formData.password.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Password
            </label>
            <button
              type="button"
              onClick={handleShowPass}
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white z-20 focus:outline-none transition-colors">
              {showPassword ? (
                <FaRegEye className="w-5 h-5" />
              ) : (
                <FaRegEyeSlash className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]">
            {loading ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Registering...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>

          <p className="text-center text-gray-400 text-sm pt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer transition-colors">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
