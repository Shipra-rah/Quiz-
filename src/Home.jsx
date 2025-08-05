import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [time, setTime] = useState(0);


  useEffect(() => {
    if (questionNo === 0) {
      setTime(0);
    } else if (questionNo === 10) {
      setTime(600); 
    } else if (questionNo === 25) {
      setTime(1500);
    } else if (questionNo === 50) {
      setTime(3000); 
    }
  }, [questionNo]);

  
  function formatTime() {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  }


  const handleStartQuiz = () => {
    if (questionNo !== 0) {
      navigate("/quiz", {
        state: { questionNo, time },
      });
    } else {
      alert("Please select the number of questions.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col gap-10 absolute ">
     
      <div className="flex flex-col md:flex-row items-center gap-5 bg-white p-5 rounded-lg shadow-md">
       
        <div className="flex items-center space-x-2">
          <label htmlFor="questionCount" className="font-semibold">
            Select Questions:
          </label>
          <select
            id="questionCount"
            className="border rounded px-3 py-2"
            onChange={(e) => setQuestionNo(Number(e.target.value))}
          >
            <option value="0">00</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

      
        <div className="text-lg font-medium">
          ⏳ Time: <span className="bg-yellow-100 px-2 py-1 rounded">{formatTime()}</span>
        </div>
      </div>


      <button
        onClick={handleStartQuiz}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-xl rounded-lg shadow-md transition"
      >
        Let's Start Quiz
      </button>
    </div>
  );
}

export default Home;
