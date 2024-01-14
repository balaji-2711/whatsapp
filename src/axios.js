import axios from "axios";

//backend base url
const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://whatsappb-4w5r.onrender.com",
});

export default instance;
