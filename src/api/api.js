import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export default axiosAPI;