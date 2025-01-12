import axios from "axios";

export const axiosObj = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080/api',
});