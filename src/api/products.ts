import Cookies from "js-cookie";

const API_URL = "http://89.191.225.217/api";

export const getProducts = async (page: number = 1) => {
  const token = Cookies.get('token');

  if (!token) {
    throw new Error("Token not found");
  }

  const response = await fetch(`${API_URL}/get_products?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `JWT ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const data = await response.json();

  return data;
};
