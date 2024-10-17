/*
    MSSV: CE181662
    Ho ten: Tran Gia Bao
*/

import { useState } from "react";
import Question from "./Question";
import quizData from "./QuizData";
import Navbar from "../Navbar/nav";
import "./quiz.scss";
import Button from "react-bootstrap/esm/Button";

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [numQues, setNumQues] = useState(1);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setNumQues(numQues + 1); // Increment question number
      setSelectedOption("");
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelectedOption("");
    setIsQuizComplete(false);
    setScore(0);
    setNumQues(1); // Reset question number
  };

  return (
    <>
      <div className="quiz__wrap">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="quiz__ques">
          <h4 className="quiz__title">Quiz Application</h4>

          <div className="quiz__body">
            <h4 className="quiz__numQues">Question {numQues}</h4>
            <hr/>
            {!isQuizComplete ? (
              <Question
                className="question__answer"
                question={quizData[current].question}
                option={quizData[current].option}
                selectedOption={selectedOption}
                optionSelect={handleOptionSelect}
                submitSelect={handleSubmit}
              />
            ) : (
              <div>
                <h5>Your Score: {score}</h5>
                <Button onClick={handleReset} variant="warning">Reset</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizApp;
