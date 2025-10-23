import React from "react";

const Card = ({link}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden p-6 mx-auto hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={link}
        alt="Card"
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a simple card built in React using Tailwind CSS. You can
          customize it easily.
        </p>
      </div>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default Card;
