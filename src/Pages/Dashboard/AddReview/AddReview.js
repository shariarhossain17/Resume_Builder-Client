import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import axiosPrivate from "../../Api/axiosPrivate";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [feedBack, setFeedBack] = useState("");
  const [rating, setRating] = useState("");
  const [users] = UserInformation(user)
  const addRating = (newRating) => {
    setRating(newRating);
  };

  const sendFeedBack = (e) => {
    if (feedBack && rating) {
      const review = {
        name: user?.displayName,
        feedback: feedBack,
        star: rating,
        img:users.img
      };
      axiosPrivate.post(`/reviews`, review).then((res) => {
        if (res.data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Thank you for your feedback",
            showConfirmButton: false,
            timer: 1500,
          });
          setFeedBack("")
          e.target.reset()
        }
      });
    } else {
      toast.error("please add text and  star both");
    }
  };
  return (
    <div>
      <div class="card max-w-sm flex mx-auto mt-20 shadow-lg text-primary-content bg-white">
        <div class="card-body">
          <h2 class=" text-center text-black mb-2 text-2xl font-bold">Add Feedback</h2>
          <textarea
            className="outline-none border-[1px] text-gray-600 p-2 rounded border-gray-400"
            name=""
            id=""
            cols="20"
            rows="6"
            placeholder="write your feedback"
            required
            onChange={(e) => setFeedBack(e.target.value)}
          ></textarea>
          <ReactStars
            count={5}
            onChange={addRating}
            size={28}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          ,
          <div class="card-actions justify-center">
            <button onClick={sendFeedBack} class="btn btn-primary text-white">
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
