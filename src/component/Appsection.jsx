import React from "react";
// import { FaGooglePlay, FaApple } from "react-icons/fa";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";

const Appsection = () => {
  return (
    <section className="bg-[#F9FBFF] py-16 w-[80vw] m-auto mb-10">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - PHONE MOCKUPS */}
        <div className="relative flex justify-center md:justify-end items-centern w-[250px]">
          <img
            src={phone1}
            alt="App screen 1"
            className="w-44 md:w-60 lg:w-72 relative z-10"
          />
          <img
            src={phone2}
            alt="App screen 2"
            className="w-44 md:w-60 lg:w-72 absolute left-12 md:left-20 top-5 opacity-90 w-[200px]"
          />
        </div>

        {/* RIGHT SIDE - DOWNLOAD INFO */}
        <div className="flex flex-col justify-center text-center md:text-left gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E204E]">
            Download the <span className="text-blue-500">Medify</span> App
          </h2>
          <p className="text-gray-600">Get the link to download the app</p>

          {/* PHONE INPUT + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-stretch">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 w-full sm:w-auto">
              <span className="text-gray-600 mr-2">+91</span>
              <input
                type="text"
                placeholder="Enter phone number"
                className="outline-none py-2 text-gray-700 w-full sm:w-48"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg">
              Send SMS
            </button>
          </div>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              {/* <FaGooglePlay className="text-2xl" /> */}
              <span className="font-medium">Google Play</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              {/* <FaApple className="text-2xl" /> */}
              <span className="font-medium">App Store</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appsection;
