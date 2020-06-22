import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-eb1e1.firebaseio.com/",
});

export default instance;
