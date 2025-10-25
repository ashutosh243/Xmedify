import React from "react";
import { Building2, CheckCircle, ThumbsUp } from "lucide-react";

const HospitalCard = ({ name, location, time, date }) => {
  return (
    <div className="flex items-start gap-3 bg-white shadow-md rounded-2xl p-4 max-w-xl border">
      <div className="relative">
        <div className="bg-blue-100 rounded-full p-4">
          <Building2 className="text-blue-600 w-8 h-8" />
        </div>
        <CheckCircle className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full w-5 h-5" />
      </div>

      <div className="flex-1">
        <h3 className="text-sky-600 font-semibold text-lg">{name}</h3>
        <p className="text-gray-700 font-semibold text-sm">{location}</p>

        <div className="mt-3">
          <button className="flex items-center gap-1 bg-green-500 text-white px-2 py-0.5 rounded">
            <ThumbsUp size={16} />
            <span className="text-sm font-medium">5</span>
          </button>
        </div>
      </div>


      <div className="flex flex-col items-end gap-2">
        <span className="border border-blue-400 text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
          {time}
        </span>
        <span className="border border-green-500 text-green-600 bg-green-50 px-3 py-1 rounded-md text-sm font-semibold">
          {date}
        </span>
      </div>
    </div>
  );
};

export default HospitalCard;
