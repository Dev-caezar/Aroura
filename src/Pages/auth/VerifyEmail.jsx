import React from "react";
import { FiMail } from "react-icons/fi";

const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-purple-100">
      <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full">
            <FiMail className="text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Verify Your Email
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          We’ve sent a verification link to your email address. Please check
          your inbox and click the link to verify your account.
        </p>

        {/* Resend Button */}
        <div className="mt-6">
          <button
            onClick={() => alert("Resend verification link")}
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition">
            Resend Email
          </button>
        </div>

        {/* Back to Login */}
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

export default VerifyEmail;
