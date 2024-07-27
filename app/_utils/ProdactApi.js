const { default: axiosClient } = require("./axiosClient");

const getLatestProdacts = () => {
  return axiosClient.get("/prodacts?populate=*");
};
const getProductDetails = (id) => axiosClient.get(`/prodacts/${id}?populate=*`);
const getProductByCategory = (category) =>
  axiosClient.get(`/prodacts?filters[Category][$eq]=${category}&populate=*`);
export default { getLatestProdacts, getProductDetails, getProductByCategory };
