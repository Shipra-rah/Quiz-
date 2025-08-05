import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Timer from "./Timer.jsx";
import Question from "./Question.jsx"; // Your full array of questions
import FinalScore from "./FinalScore.jsx";

// Shuffle helper function
const shuffleArray = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

function QuizCard() {
  const { state } = useLocation();
  const { questionNo, time } = state || { questionNo: 10, time: 600 };

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [showScore, setShowScore] = useState(false);

 
  useEffect(() => {
    const shuffled = shuffleArray(Question).slice(0, questionNo);
    setShuffledQuestions(shuffled);
  }, [questionNo]);


  if (shuffledQuestions.length === 0) return <div>Loading...</div>;

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    shuffledQuestions.forEach((ques, index) => {
      if (selectedOption[index] === ques.Ans) {
        score++;
      }
    });
    return score;
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      alert("This is the first question.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 ">
      {!showScore ? (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg bg-gray-200 px-3 py-1 rounded-md">
              Q: {currentIndex + 1}/{shuffledQuestions.length}
            </span>
            <Timer time={time} setshowScore={setShowScore} />
          </div>

          <hr className="border-gray-300" />

          {/* Question */}
          <div className="text-base font-medium text-gray-800">
            <mark className="bg-yellow-100 px-1 rounded">{currentQuestion.ques}</mark>
          </div>

          {/* Options */}
          <ol className="flex flex-col space-y-3">
            {currentQuestion.option.map((opt, i) => {
              const isChecked = selectedOption[currentIndex] === opt;
              const OptionID = `option_${i}`;
              return (
                <li
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                    isChecked ? "bg-green-300" : "bg-gray-100 hover:bg-green-100"
                  }`}
                  onClick={() => handleOptionSelect(opt)}
                >
                  {String.fromCharCode(65 + i)}.
                  <input
                    type="radio"
                    id={OptionID}
                    name="option"
                    checked={isChecked}
                    onChange={() => handleOptionSelect(opt)}
                  />
                  <label htmlFor={OptionID} className="cursor-pointer w-full">
                    {opt}
                  </label>
                </li>
              );
            })}
          </ol>

          <hr className="border-gray-300" />

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleNext}
            >
              {currentIndex === shuffledQuestions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <FinalScore
          score={calculateScore()}
          total={shuffledQuestions.length}
          onRestart={() => {
            const reshuffled = shuffleArray(Question).slice(0, questionNo);
            setShuffledQuestions(reshuffled);
            setCurrentIndex(0);
            setSelectedOption({});
            setShowScore(false);
          }}
        />
      )}
    </div>
  );
}

export default QuizCard;
