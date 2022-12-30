import axios from "axios";

const baseURL = 'https://edb-test-3fmy-jcuartas1.vercel.app/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*',
  },
});

export default api;