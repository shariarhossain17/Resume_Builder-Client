import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";
import bg from "../../../assets/expert_bg.png";
import { BsFillChatDotsFill } from "react-icons/bs";

const ExpertCard = ({ expert, currentUser }) => {
  const { img, name, _id } = expert;
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState({});
  console.log();

  const navigate = useNavigate();
  const handleMessage = (msgId) => {
    if (currentUser) {
      axiosPrivate
        .post("/admin/chat", {
          senderId: currentUser,
          receiverId: msgId,
        })
        .then((res) => {
          if (res.data) {
            navigate("/dashboard/chat");
          }
        });
    }
  };
  return (
    <div className="block px-5 pt-5 pb-4 transition relative shadow-md rounded-xl hover:shadow-lg cursor-pointer">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-40 rounded-xl"
        src={bg}
        alt="resume"
      />
      <a className="relative">
        <div className="flex items-center gap-2">
          <div class="avatar">
            <div class="w-16 border-[1px] shadow-md border-primary rounded-full">
              <img src={img} alt="" />
            </div>
          </div>

          <h3 className="mt-3 mb-2 text-xl font-semibold text-left capitalize ">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-medium my-2">
          <a
            className="px-[10px] py-[1px]  rounded-full bg-blue-300 shadow-sm"
            href="/"
          >
            Researcher
          </a>
          <a
            className="px-[10px] py-[1px]  rounded-full bg-red-200 shadow-sm"
            href="/"
          >
            Adviser
          </a>
          <a
            className="px-[10px] py-[1px] rounded-full bg-green-200 shadow-sm"
            href="/"
          >
            Job Hunter
          </a>
        </div>
        <div>
          <p className="text-[15px] my-3">
            If you need any help please contact me. by clicking the start chat
            button.
          </p>
        </div>

        <button
          onClick={() => handleMessage(_id)}
          className="bg-primary px-4 py-2 rounded-md hover:bg-blue-800 flex items-center gap-2 text-white font-medium"
        >
          Start Chat
          <BsFillChatDotsFill className="text-white" />
        </button>
      </a>
    </div>
  );
};

export default ExpertCard;
