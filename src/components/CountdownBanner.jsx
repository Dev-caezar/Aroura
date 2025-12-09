import React, { useState, useEffect, useRef } from "react";

const calculateTimeLeftFrom = targetDate => {
  const now = new Date();
  const difference = +targetDate - +now;

  if (difference <= 0) return {};

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownBanner = () => {
  const targetDateRef = useRef(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000));

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeftFrom(targetDateRef.current)
  );

  useEffect(() => {
    const tick = () => {
      setTimeLeft(calculateTimeLeftFrom(targetDateRef.current));
    };

    tick();
    const timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map(interval => (
    <span key={interval} className="flex flex-col items-center">
      <span className="text-3xl font-bold">
        {String(timeLeft[interval]).padStart(2, "0")}
      </span>
      <span className="text-sm uppercase">
        {interval === "days"
          ? "D"
          : interval === "hours"
          ? "H"
          : interval === "minutes"
          ? "M"
          : "S"}
      </span>
    </span>
  ));

  const PRIMARY_COLOR = "bg-purple-500";
  const BUTTON_BG = "bg-black";
  const BUTTON_TEXT = "text-white";
  const BUTTON_HOVER = "hover:bg-black/70";

  return (
    <div
      className={`w-full py-8 text-white ${PRIMARY_COLOR} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <h3 className="text-3xl font-extrabold">Flash Sale: Up to 50% Off!</h3>

        <div className="flex space-x-4">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-2xl font-bold">Sale Ended!</span>
          )}
        </div>

        <a
          href="/sale"
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${BUTTON_BG} ${BUTTON_TEXT} ${BUTTON_HOVER}`}>
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CountdownBanner;
