import React, { useRef, useState, useEffect } from "react";
import { Mail, Clock, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const otpRef = useRef([]);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleChange = (event, index) => {
    const value = event.target.value;

    const char = value.slice(-1);

    if (!/^\d*$/.test(char) || char.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);

    if (char && index < otp.length - 1) {
      otpRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpRef.current[index - 1].focus();
    }

    if (event.key === "Enter") {
      event.preventDefault();
      handleVerify();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 4) return;

    setLoading(true);
    console.log("Verifying OTP:", fullOtp);

    setTimeout(() => {
      setLoading(false);

      navigate("/reset-password");
    }, 2000);
  };

  const handleResend = () => {
    console.log("Resending OTP code...");
    setResendTimer(60);
  };

  const isOtpComplete = otp.join("").length === 4;

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-gray-900 border border-purple-800 rounded-xl shadow-xl shadow-purple-900/40 p-8 sm:p-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-600/50">
            <Mail className="w-7 h-7" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-3">
          Verify Security Code
        </h2>

        <p className="text-gray-400 mb-8">
          Enter the 4-digit code sent to your email.
        </p>

        <div className="flex justify-center gap-3">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              ref={el => (otpRef.current[index] = el)}
              onChange={e => handleChange(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-3xl font-bold text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-0 transition duration-200"
              style={{ caretColor: "transparent" }}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading || !isOtpComplete}
          className="w-full mt-10 flex justify-center py-3 px-4 rounded-xl shadow-lg text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]">
          {loading ? (
            <div className="flex items-center space-x-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              <span>Verifying...</span>
            </div>
          ) : (
            "Verify Code"
          )}
        </button>

        {/* Resend Logic */}
        <p className="text-center text-sm mt-6">
          {resendTimer > 0 ? (
            <span className="text-gray-500 flex items-center justify-center">
              <Clock className="w-4 h-4 mr-1 text-purple-400" />
              Resend available in:{" "}
              <span className="font-bold text-purple-400 ml-1">
                {resendTimer}s
              </span>
            </span>
          ) : (
            <button
              onClick={handleResend}
              disabled={loading}
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors disabled:opacity-50">
              Resend Code Now
            </button>
          )}
        </p>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-gray-500 hover:text-gray-400 flex items-center justify-center gap-1 font-semibold transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
