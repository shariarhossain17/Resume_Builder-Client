import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/icon/profile.png";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import bg from "../../../assets/profile_bg.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [users, isLoading, refetch] = UserInformation(user);

  return (
    <div className=" py-10 ">
      <div className="card relative shadow-2xl p-6   border-primary rounded-lg mx-10  ">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src={bg}
          alt="resume"
        />
        <div className="relative">
          <div className="flex  items-center mx-10 justify-between">
            <div>
              <p className="text-2xl font-bold ">My Profile</p>
            </div>
            <div>
              <Link to="/dashboard/edit-profile">
                <button className=" py-1 px-4 rounded-full bg-primary text-white hover:bg-blue-800 mt-4 ml-8 font-medium">
                  EDIT
                </button>
              </Link>
            </div>
          </div>
          {/* <hr /> */}
          <div className=" flex  flex-col md:flex-row    py-10 mx-10 gap-10  ">
            <div class="">
              {users?.img ? (
                <div class="avatar ml-4">
                  <div class="w-40 mx-auto text-center rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img className="" src={users?.img} />
                  </div>
                </div>
              ) : (
                <img className="w-[200px]" src={profileImg} alt="profile"></img>
              )}
              {/* <button className="btn btn-primary mx-auto  p-4">Edit Profile</button> */}
              <div className=" ">
                <Link to="/dashboard/edit-profile">
                  <button className="btn btn-primary px-4 rounded-full  mt-4 ml-8 text-white">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>

            <div className=" mt-4  ">
              <p className="font-semibold mb-2">user Id:</p>
              <p className="text-xl mb-2">writoRcc-{users._id?.slice(0, 6)}</p>
              <p className="font-semibold mb-2">Full Name:</p>
              <p className="text-xl mb-2">
                {users?.name ? users?.name : user?.displayName}
              </p>
              <p className="font-semibold">Email:</p>
              <p className="text-xl mb-2">{user?.email}</p>
              <p className="font-semibold mb-2">Phone:</p>
              <p className="text-xl mb-2">{users?.number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
