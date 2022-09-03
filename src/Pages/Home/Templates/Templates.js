import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Templates.css";

const Templates = () => {
  return (
    <div className="py-12 homeTemplate lg:relative mt-">
      {/* menu section */}

      <div className="md:w-[410px] h-[100px] mx-auto flex justify-center items-center shadow-lg shadow-slate-800 lg:absolute lg:top-[-50px] lg:left-[33%]  2xl:left-[39%] lg:bg-[#314272] rounded-full">
        <div
          style={{ width: "350px" }}
          class=" border-accent rounded-full mx-auto bg-[#e4e8f3] py-"
        >
          <ul class="flex flex-row justify-between md:px-1 md:py-1">
            <Link
              className=" text-md hover:bg-[#314272] hover:text-white px-6 py-2 rounded-full"
              to="/"
            >
              Resume
            </Link>
            <Link
              className=" text-md hover:bg-[#314272] hover:text-white px-6 py-2 rounded-full"
              to="/cv"
            >
              CV
            </Link>
            <Link
              className=" text-md hover:bg-[#314272] hover:text-white px-6 py-2 rounded-full"
              to="/coverLetter"
            >
              Cover Letter
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center my-12 md:my-20">
        <div className="w-[600px] text-center text-slate-50 px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl mb-10 poppins-b">
            Our Creative Templates
          </h1>
          <p className="text-sm md:text-md  text-justify text-slate-200 poppins-t">
            Highlight your best assets through economical communication.
            Traditional or creative resume templates, cv templates and cover
            letter templates - take your pick. Your resume will always beat
            luck.
          </p>
        </div>
      </div>
      {/* template section */}
      <div className="px-16 pt-8 pb-6 mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Templates;
