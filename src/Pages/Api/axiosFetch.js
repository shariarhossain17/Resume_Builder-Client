import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://writorcc-server-06.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
});
export default axiosFetch;
