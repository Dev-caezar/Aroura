import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi"; // Used for the main icon
import { Clock, ChevronLeft } from "lucide-react"; // Using Clock and ChevronLeft for better visuals
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({ userEmail = "user@example.com" }) => {
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(60);
  const [resending, setResending] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleResend = () => {
    setResending(true);
    console.log("Resending verification email...");

    // Simulate API call to resend email
    setTimeout(() => {
      setResending(false);
      setResendTimer(60); // Reset timer on successful resend
      // You would add success/error handling here
      alert("New verification link sent!");
    }, 1500);
  };

  return (
    // Outer Container: Full Screen Black Background
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      {/* Verification Card: Dark theme, reduced max width, and purple shadow */}
      <div className="w-full max-w-md bg-gray-900 border border-purple-800 rounded-xl shadow-xl shadow-purple-900/40 p-8 sm:p-10 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-600/50">
            <FiMail className="text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-3">
          Confirm Your Account
        </h2>

        {/* Message */}
        <p className="text-gray-400 mb-6">
          A verification link has been sent to:
          <span className="font-semibold text-purple-400 block mt-1">
            {userEmail}
          </span>
        </p>

        <p className="text-sm text-gray-500 mb-8">
          Please check your inbox (and spam folder) and click the link to
          activate your account.
        </p>

        {/* Resend Button and Timer */}
        <div className="mt-8 space-y-4">
          <button
            onClick={handleResend}
            disabled={resendTimer > 0 || resending}
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg">
            {resending ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Sending...</span>
              </div>
            ) : (
              "Resend Verification Link"
            )}
          </button>

          {/* Timer Display */}
          <div className="text-center text-sm">
            {resendTimer > 0 && !resending ? (
              <p className="text-gray-500 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1 text-purple-400" />
                You can resend in:{" "}
                <span className="font-bold text-purple-400 ml-1">
                  {resendTimer}s
                </span>
              </p>
            ) : resendTimer === 0 && !resending ? (
              <p className="text-purple-400 font-semibold">Ready to Resend</p>
            ) : null}
          </div>
        </div>

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-gray-500 hover:text-gray-400 flex items-center justify-center gap-1 font-semibold transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
