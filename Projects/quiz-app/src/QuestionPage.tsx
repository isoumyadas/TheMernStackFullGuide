import { useState } from "react";
import questions from "@/questions.json";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // What has the user answered? We'll store answers in an object
  // like { 0: "User's Answer for Q1", 1: "User's Answer for Q2" }
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const currentQuestion = questions[currentQuestionIndex]; // grabs only 1 question from the questions array of object.

  const onNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const onPrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  // handler function for selectedAnswers state

  const handleOptionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: e.target.value,
    }));
  };

  // we're collecting all the answers from the users and then summing it all.

  if (currentQuestionIndex === questions.length) {
    let finalScore = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        finalScore++;
      }
    });

    return (
      <div className="flex flex-col gap-6 font-bold">
        <p>{`Your Final Score is ${finalScore}/${questions.length}`}</p>

        <p>Click Refresh To Start Quiz..</p>
      </div>
    );
  }
  return (
    <div>
      <div key={currentQuestion.id} className="flex flex-col gap-4">
        <h1>{currentQuestion.title}</h1>
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => (
            <li key={index} className="list-none">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name={currentQuestion.id} // The name attribute is what groups radio buttons together, allowing you to select only one. If all radio buttons for all questions have the same name ("option"), you'd only be able to select one option across the entire page. By giving each question's radio group a unique name (like its ID), you ensure each question is treated as a separate group.
                  onChange={handleOptionSelect}
                  // The 'checked' prop. checks if the answer for *this question index* is equal to the *current option*.
                  checked={selectedAnswers[currentQuestionIndex] === option}
                  className="bg-gray-700 cursor-pointer"
                  //   checked={optionHandle === option}
                  value={option} // Now, e.target.value will be the string of the actual option, not "on".
                />
                <Label>{option}</Label>
              </div>
            </li>
          ))}
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={onPrevious}
          disabled={currentQuestionIndex <= 0}
          className="cursor-pointer"
        >
          Previous
        </Button>
        <Button onClick={onNext} className="cursor-pointer">
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default QuestionPage;

// How It All Works Together:
// First Load: The component loads. currentQuestionIndex is 0. Your JSX grabs questions[0] and displays the first question and its options.

// User Clicks "Next": The onNext function runs.

// State Changes: It calls setCurrentQuestionIndex((prev) => prev + 1);. The state currentQuestionIndex is now 1.

// React Re-renders: Because its state changed, your whole component function runs again.

// New Question Appears: This time, when it gets to const currentQuestion = questions[currentQuestionIndex];, it's grabbing questions[1] (the second question). React then renders this second question and its options on the screen.
