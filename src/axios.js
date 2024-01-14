import axios from "axios";

//backend base url
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
