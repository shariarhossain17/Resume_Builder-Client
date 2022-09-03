import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { HiPhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loading from "../../../Shared/Loading/Loading";
import axiosPrivate from "../../Api/axiosPrivate";
import CoverLetterNavbar from "./CoverLetterNavbar";
import { FiArrowDown } from "react-icons/fi";
const CoverLetterTemplate = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["coverLetter"], () =>
    axiosPrivate.get(`coverLetterInfo/${id}`)
  );

  // download cover letter
  const componentRef = useRef();
  const handelDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  if (isLoading) {
    return <Loading />;
  }
  const { name, email, experience, jobRole, linkedin, phone, challenge } =
    data?.data;
  const { skillOne, skillTwo, skillThree } = data?.data?.skill;
  const { strengthOne, strengthTwo, strengthThree } = data?.data?.strength;
  return (
    <div className="bg-[#f4f7f8] min-h-screen pb-20">
      <CoverLetterNavbar />
      <div className="lg:w-[65%] md:w-[90%] w-[95%] mx-auto">
        <div className="w-fit ml-auto mt-4 mb-2">
          <button
            onClick={handelDownload}
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-400 ring-offset-blue-300 hover:ring-offset-blue-600 ease focus:outline-none"
          >
            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="relative z-20 flex items-center gap-2 text-sm">
              <FiArrowDown className="animate-bounce font-extrabold text-[20px]" />
              Download
            </span>
          </button>
        </div>
      </div>
      <div className="lg:w-[65%] md:w-[90%] w-[95%] mx-auto bg-white shadow-md">
        <div ref={componentRef} className=" p-[8%]">
          <div
            contentEditable
            className="p-3 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
          >
            <h2 className="text-3xl poppins-r text-blue-700">{name}</h2>
            <h4 className="text-lg poppins-r text-gray-600">{jobRole}</h4>
            <div className="md:flex flex-wrap gap-5 my-2 text-[13px] poppins-t">
              <p className="flex gap-1 place-items-center">
                <HiPhone /> {phone}
              </p>
              <p className="flex gap-1 place-items-center">
                <MdOutlineMail /> {email}
              </p>
              <p className="flex gap-1 place-items-center">
                <TbBrandLinkedin /> {linkedin}
              </p>
            </div>
          </div>
          <div className="text-[15px] poppins-t text-gray-600">
            <p
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              Dear <span contentEditable>[Hiring Manager's Name]</span>,
            </p>

            <p
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              You must be receiving floods of resumes for the role of {jobRole}.
              So, I will cut short. I believe I would be a great fit for the{" "}
              {jobRole}
              position at [Company Name]. Here's what makes me confident I can
              pull this off.
            </p>

            <p
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              I've recently finished my internship at [Company Name] [Department
              Name]. This experience was incredibly valuable, as it helped me
              kick off my career in {jobRole} in three different fields:
            </p>

            <ul
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              <li>
                I've further developed my {skillOne} and {skillTwo} I learned
                during my [Education field] at [University Name].
              </li>
              <li>
                I also contributed to the [Project/Responsibility] that allowed
                us to [Improvements].
              </li>
              <li>
                Furthermore, I assisted the department lead and provided
                material for [Project/Responsibility].
              </li>
            </ul>

            <p
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              The reason why I consider the above a defining experience for me
              is the results I was able to achieve. skill three helped me to
              [improvement] by [30%].
            </p>

            <p
              contentEditable
              className="p-3 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              Additionally, my work at [Previous Company Name] helped me gain
              first-hand experience in {strengthOne}, {strengthTwo} and{" "}
              {strengthThree}.
            </p>
            <p
              contentEditable
              className="p-3 my-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              Above all requirements, I believe you are looking for a capable
              person who can address challenging tasks such as Biggest Chalange.
              I can fulfil this expectation, because {challenge}
            </p>

            <p
              contentEditable
              className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
            >
              Could we grab a coffee and have a chat about how do you see a next
              job develop into an integral part of the [Company Name]'s team?
            </p>
            <div>
              <div
                contentEditable
                className="p-3 mb-2 border-0 focus:border-[1px] outline-none border-green-600 rounded-md focus:bg-gray-100"
              >
                <p>Best Regards,</p>
                <p>
                  {name}, {jobRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate;
