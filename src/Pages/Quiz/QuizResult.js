import React from "react";
import { Link, useParams } from "react-router-dom";
import resultImg from "../../assets/quiz_result.gif";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../Api/axiosPrivate";
import bg from "../../assets/result_bg.gif";

const QuizResult = () => {
  const { email } = useParams();
  const { data, isLoading, refetch } = useQuery(["quiz_result"], () =>
    axiosPrivate.get(`/quizResult/${email}`)
  );
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="bg-green-50 min-h-screen flex items-center">
      <div className="max-w-md relative bg-white mx-auto px-10 pb-7 shadow-lg">
        <img
          class="absolute inset-0 object-[50%] sm:object-[25%] object-cover w-full h-full opacity-75"
          src={bg}
          alt="resume"
        />
        <div className="w-fit mx-auto relative">
          <div>
            <img className="mx-auto" src={resultImg} alt="quiz result img" />
          </div>
          <div>
            <h1 className="text-3xl poppins text-rose-600 font-semibold">
              Congratulations 🎉🎉
            </h1>
            <p className="text-lg poppins-b my-4">
              Hi,{" "}
              <span className="text-primary font-semibold">
                {data?.data?.name ? data?.data?.name : data?.data?.email}
              </span>{" "}
              you got{" "}
              <span className="text-primary font-semibold">
                {data?.data?.marks}
              </span>{" "}
              out of{" "}
              <span className="text-primary font-semibold">
                {data?.data?.totalQuestion}
              </span>
            </p>
            <div className="mt-5 mb-2 flex justify-between">
              <Link
                to="/"
                className="py-3 text-white font-medium px-5 rounded-md bg-rose-600 hover:bg-rose-700"
              >
                Back to home
              </Link>{" "}
              <Link
                to="/dashboard/leaderBoard"
                className="py-3 text-white font-medium px-5 rounded-md bg-blue-700 hover:bg-blue-900"
              >
                See leaderBoard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
