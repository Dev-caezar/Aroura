import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [showPass, setShowPass] = useState(false);

  const TogglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-purple-100">
      <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
            <FiLock className="text-2xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          Enter your new password below to reset your account password.
        </p>
        <div className="mt-6 space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter new password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={TogglePassword}>
              {showPass ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Confirm new password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={TogglePassword}>
              {showPass ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition">
            Reset Password
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-purple-600 hover:text-purple-800 flex items-center justify-center gap-1">
            ← Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
