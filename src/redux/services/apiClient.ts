// src/api/client.ts
const API_URL = 'https://dummyjson.com';


export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
