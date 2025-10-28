import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

export const getDashboardData = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement du dashboard", error);
    throw error;
  }
};
