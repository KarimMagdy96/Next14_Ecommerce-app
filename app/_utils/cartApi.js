import { default as axiosClient } from "./axiosClient";
const addToCart = (payload) => axiosClient.post("/carts", payload);
const getUserCartItem = (email) =>
  axiosClient.get(
    `/carts?populate[prodacts][populate]=banner&filter[email][$eq]=${email}`
  );

export default {
  addToCart,
  getUserCartItem,
};
