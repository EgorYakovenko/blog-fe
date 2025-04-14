import axios from "axios";

//настройка аксиос
const instance = axios.create({
  baseURL: "http://localhost:4444",
});

export default instance;
