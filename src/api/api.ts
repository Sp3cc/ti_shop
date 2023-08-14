import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

// https://hamburgueria-kenzie-v2.herokuapp.com