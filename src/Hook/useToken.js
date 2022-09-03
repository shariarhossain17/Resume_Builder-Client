import { useEffect, useState } from "react";
import axiosFetch from "../Pages/Api/axiosFetch";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.user?.email;
  const name = user?.user?.displayName;
  useEffect(() => {
    if (email) {
      const currentUser = { email, name };
      axiosFetch.put(`users/${email}`, currentUser).then((response) => {
        const accessToken = response?.data?.token;
        localStorage.setItem("userToken", accessToken);
        setToken(accessToken);
      });
    }
  }, [user]);

  return token;
};

export default useToken;
