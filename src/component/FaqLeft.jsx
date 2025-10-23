import React from "react";
import doctorImg from '../assets/docterr.png';

const FaqLeft = () => {
  return (
    <div className="relative">
      <img
        src={doctorImg}
        alt="Doctor with patient"
        className="rounded-xl shadow-lg h-[500px]"
      />
      <div className="absolute -bottom-5 -left-5 bg-white shadow-md rounded-lg flex items-center gap-2 px-4 py-2">
        <span className="text-3xl">😊</span>
        <div>
          <p className="text-blue-800 font-bold text-lg">84k+</p>
          <p className="text-gray-500 text-sm">Happy Patients</p>
        </div>
      </div>
      <div className="absolute top-1/2 -right-6 bg-white shadow-md rounded-full p-3">
        <span className="text-2xl">🌸</span>
      </div>
    </div>
  );
};

export default FaqLeft;
