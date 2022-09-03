import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import axiosPrivate from "../../Api/axiosPrivate";
import AlluserTable from "./AlluserTable";
import SetRoleModal from "./SetRoleModal";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearcValue] = useState("");

  const { data, isLoading, refetch } = useQuery(["all-user"], () => {
    axiosPrivate.get(`/all-users`).then(
      (response) => {
        setUsers(response.data);
      },
      (err) => {
        if (err.response.status === 401 || err.response.status) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      }
    );
  });


  const handleSearch = (e) => {
    e.preventDefault();
    axiosPrivate.get(`/all-users?email=${searchValue}`).then((response) => {
      setUsers(response.data);
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-4">All User</h1>
      <div>
        <div class="form-control mt-4">
          <div class="input-group w-[60%] md:w-[20%] mx-auto">
            <input
              type="text"
              placeholder="Search By email"
              className="outline-none border border-gray-500 px-2"
              onChange={(e) => setSearcValue(e.target.value)}
            />
            <button
              onClick={handleSearch}
              class="btn-primary btn-square text-white px-4"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto mt-6">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Email</th>
                <th>set role</th>
                <th>Set Blog expert</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <AlluserTable
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
      </div>
      <SetRoleModal />
    </div>
  );
};

export default AllUser;
