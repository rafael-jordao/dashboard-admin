'use client'
import { useEffect, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Question: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="relative shadow-md">
      <button
        onClick={toggleAnswer}
        className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg text-gray-600 focus:outline-none focus:bg-gray-300 shadow-md"
      >
        <FaQuestion size={20} />

      </button>
      {showAnswer && (
        <div className="absolute top-9 right-0 mt-2 mr-2 bg-white p-4 shadow-lg rounded-lg">
          <p className="text-gray-800">Aqui está a resposta para sua dúvida!</p>
        </div>
      )}
    </div>
  );
};

export default Question;
