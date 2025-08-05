import { useEffect, useState } from "react";

function Timer({ setshowScore, time }) {
  const [timeLeft, setTimeLeft] = useState(time || 60); // Fallback to 60 sec

  useEffect(() => {
    if (timeLeft <= 0) {
      setshowScore(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const timeAlertClass = timeLeft <= 60 ? "bg-red-600 text-white" : "bg-green-200";

  return (
    <div className={`px-4 py-1 rounded font-semibold ${timeAlertClass}`}>
      ⏳ {formatTime()}
    </div>
  );
}

export default Timer;
