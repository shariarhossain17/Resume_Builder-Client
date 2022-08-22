import React from "react";
import writeResume from "../../../assets/write-resume.webp";
import "./WriteResume.css";

const WriteResume = () => {
  return (
    <div className="grid md:grid-cols-2 gap-7 content-center md:mx-16 mx-8 py-10">
      <div className="flex items-center md:order-1 order-2">
        <div className="lg:max-w-md">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-gray-800 front-crimson">
            The Right Resume & CV Maker for the Job
          </h2>
          <p className="text-lg lg:my-10 my-5 text-gray-600">
            Tech, Engineering, Management or Marketing - CV generator with the
            right resume templates to highlight your career journey.
          </p>
          <button className="btn btn-primary text-white">
            Explore all Templates
          </button>
        </div>
      </div>
      <div className="flex items-center md:order-2 order-1">
        <img src={writeResume} alt="write resume" />
      </div>
    </div>
  );
};

export default WriteResume;
