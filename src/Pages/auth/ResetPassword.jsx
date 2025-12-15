import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const TogglePassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Error: Passwords do not match.");
      setLoading(false);
      return;
    }

    console.log("Submitting new password:", passwords.newPassword);

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-900 border border-purple-800 rounded-xl shadow-xl shadow-purple-900/40 p-8 sm:p-8 transition duration-300">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-600/50">
            <FiLock className="text-3xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Set New Password
        </h2>
        <p className="text-sm text-center text-gray-400 mt-2 mb-8">
          Enter and confirm your new password below.
        </p>
        <div className="space-y-4">
          <div className="relative">
            <input
              id="newPassword"
              name="newPassword"
              type={showPass ? "text" : "password"}
              value={passwords.newPassword}
              onChange={handleChange}
              placeholder=" "
              required
              className="block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer pr-12 transition-colors duration-200 focus:bg-gray-800 shadow-inner shadow-black/50"
            />
            <label
              htmlFor="newPassword"
              className={`absolute text-sm text-gray-400 duration-300 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            passwords.newPassword.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              New Password
            </label>
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-purple-400 z-20 focus:outline-none transition-colors"
              onClick={TogglePassword}
              aria-label={showPass ? "Hide Password" : "Show Password"}>
              {showPass ? (
                <FiEyeOff className="w-5 h-5" />
              ) : (
                <FiEye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPass ? "text" : "password"}
              value={passwords.confirmPassword}
              onChange={handleChange}
              placeholder=" "
              required
              className="block w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer pr-12 transition-colors duration-200 focus:bg-gray-800 shadow-inner shadow-black/50"
            />
            <label
              htmlFor="confirmPassword"
              className={`absolute text-sm text-gray-400 duration-300 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            passwords.confirmPassword.length > 0
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Confirm Password
            </label>
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-purple-400 z-20 focus:outline-none transition-colors"
              onClick={TogglePassword}
              aria-label={showPass ? "Hide Password" : "Show Password"}>
              {showPass ? (
                <FiEyeOff className="w-5 h-5" />
              ) : (
                <FiEye className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={
              loading || !passwords.newPassword || !passwords.confirmPassword
            }
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg">
            {loading ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Resetting...</span>
              </div>
            ) : (
              "Confirm New Password"
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1 font-semibold transition-colors">
            ← Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
