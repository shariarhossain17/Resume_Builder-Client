import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import axiosPrivate from "../../Api/axiosPrivate";
import ExpertCard from "./ExpertCard";

const Expert = () => {
  const [experts, setExpert] = useState([]);
  const [user] = useAuthState(auth);
  const [users] = UserInformation(user);
  console.log(users._id);

  useEffect(() => {
    axiosPrivate
      .get("/expert?writer=expert")
      .then((res) => {
        setExpert(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  }, []);
  console.log(experts);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {experts.map((expert) => (
        <ExpertCard key={expert._id} expert={expert} currentUser={users?._id} />
      ))}
    </div>
  );
};

export default Expert;
