import { useState } from "react";
import { FiLock } from "react-icons/fi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Password reset link requested for:", email);
    }, 2000);
  };

  const isEmailFilled = email.length > 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-900 border border-purple-800 rounded-xl shadow-xl shadow-purple-900/40 p-8 sm:p-8 transition duration-300 hover:shadow-purple-900/60">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-600/50">
            <FiLock className="text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-white">
          Access Recovery
        </h2>
        <p className="text-sm text-center text-gray-400 mt-2 mb-8">
          Enter your email to receive a secure link to reset your password.
        </p>

        <div className="space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" "
              required
              className={`block w-full px-4 py-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer
                         transition-colors duration-200 shadow-inner shadow-black/50`}
            />
            <label
              htmlFor="email"
              className={`absolute text-sm text-gray-400 duration-300 transform z-10 origin-[0] bg-gray-900 px-2 
                          peer-focus:px-2 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 
                          ${
                            isEmailFilled
                              ? "scale-75 -translate-y-4 top-2 bg-gray-900"
                              : "top-1/2 -translate-y-1/2"
                          }`}>
              Email Address
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg">
            {loading ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Sending Link...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/login"
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1 font-semibold transition-colors">
            ← Back to Sign In
          </a>
        </div>
      </form>
    </div>
  );
}
