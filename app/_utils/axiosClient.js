const { default: axios } = require("axios");

const apiUrl = "http://localhost:1337/api";
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
  },
});

export default axiosClient;
