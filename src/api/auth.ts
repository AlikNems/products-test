import Cookies from "js-cookie";

const API_URL = "/api";

export const login = async (username: string, password: string) => {
  const requestBody = { username, password };

  const response = await fetch(`${API_URL}/sign_in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();

  // Check if the token appears in the cookies
  await new Promise((resolve) => setTimeout(resolve, 100));

  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Token is missing from cookies. Check the server settings.");
  }

  return { token };
};

// Function to create headers with the token
export const getAuthHeaders = () => {
  const token = Cookies.get('token');

  if (!token) {
    throw new Error("No token for authorization");
  }

  return {
    "Content-Type": "application/json",
    Authorization: `JWT ${token}`,
  };
};

export const register = async (username: string, password: string, fullName: string) => {
  const requestBody = { username, password, full_name: fullName };

  const response = await fetch(`${API_URL}/sign_up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  const data = await response.json();

  return data;
};

export const logout = () => {
  Cookies.remove('token');
};
