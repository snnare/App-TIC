import axios from "axios";

const API_URL = "http://52.242.86.83:3000/api/"; 

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;