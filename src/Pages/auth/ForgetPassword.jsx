// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { FiLock } from "react-icons/fi";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-purple-100">
      <div className="w-full max-w-[35%] bg-black rounded-lg shadow-lg p-10">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
            <FiLock className="text-2xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          Enter your email address below to receive a password reset link.
        </p>
        <div className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition">
            Reset Password
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-purple-600 hover:text-purple-800 flex items-center justify-center gap-1">
            ← Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
