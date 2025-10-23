import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800 w-[40vw]">{question}</span>
        <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};
export default FaqItem;