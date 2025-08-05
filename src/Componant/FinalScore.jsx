import React from "react";
import { useNavigate } from "react-router-dom";

function FinalScore({ score, total, onRestart }) {
  const percentage = (score / total) * 100;
   const navigate = useNavigate();

  let message = "";
  let subMessage = "";
  let color = "";

  if (percentage >= 80) {
    message = "🎉 Excellent!";
    subMessage = "You're a genius! Keep up the great work. 🚀";
    color = "text-green-600";
  } else if (percentage >= 50) {
    message = "😊 Good Job!";
    subMessage = "You're on the right track. Keep practicing and you’ll excel!";
    color = "text-yellow-600";
  } else {
    message = "😓 Needs Improvement";
    subMessage = "Don’t give up! Review and try again. You've got this. 💪";
    color = "text-red-600";
  }

  const goHome= ()=>{
     navigate("/");
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-xl p-8 text-center space-y-6 animate-fade-in">
      <h2 className={`text-2xl font-bold ${color}`}>{message}</h2>
      <p className="text-lg text-gray-700">
        Your Score: <strong className="text-black">{score}</strong> / {total}
      </p>
      <p className="italic text-sm text-gray-600">{subMessage}</p>

      {/* Optional motivational quote */}
      <blockquote className="text-sm text-gray-500 border-l-4 border-blue-400 pl-3 mt-4">
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
      </blockquote>

     <div className=" w-full justify-center flex gap-5">
       <button
        onClick={onRestart}
        className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-all duration-300"
      >
        🔁 Restart Quiz
      </button>
      <button
        onClick={goHome}
        className="mt-6 px-5 py-2  bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-all duration-300"
      >
        Go Home
      </button>
     </div>
    </div>
  );
}

export default FinalScore;
