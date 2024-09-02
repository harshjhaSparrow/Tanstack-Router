// src/api/client.ts
import axios from "axios";

// Set the base URL using axios
const API_URL = import.meta.env.VITE_API_URL || "https://dummyjson.com";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      `Error fetching data: ${error.response?.statusText || error.message}`
    );
  }
};


export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      `Error posting data: ${error.response?.statusText || error.message}`
    );
  }
};
