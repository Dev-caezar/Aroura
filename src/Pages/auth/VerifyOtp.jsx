import React, { useRef, useState } from "react";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const otpRef = useRef([]);
  console.log(otpRef);

  const handleChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event && index < otp.length - 1) {
      otpRef.current[index + 1].focus();
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-purple-500 to-purple-100 flex justify-center items-center p-4">
      <div className="w-full max-w-[40%] bg-black rounded-2xl shadow-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-extrabold mb-3 text-gray-900 text-center">
          Verify Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Enter the 4-digit code sent to your email.
        </p>
        <div className="flex justify-center gap-3">
          {otp.map((data, index) => (
            <input
              type="text"
              key={index}
              maxLength={1}
              value={data}
              ref={el => (otpRef.current[index] = el)}
              onChange={e => handleChange(e, index)}
              className="w-[105px] h-[65px] border-2 border-purple-500 text-center font-bold text-4xl rounded-[8px]"
            />
          ))}
        </div>
        <button className="w-full mt-10 flex justify-center py-3 px-4 rounded-xl shadow-lg text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out transform hover:scale-[1.01]">
          Verify Code
        </button>
        <p className="text-center text-sm mt-4 text-gray-500">
          Didn't receive the code?{" "}
          <button className="text-purple-600 font-semibold hover:text-purple-700">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
