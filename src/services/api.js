import axios from 'axios';

// Crée une instance Axios pour le backend
const API = axios.create({
  baseURL: 'http://localhost:8080/api/admin/dashboard',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAdminDashboard = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token || '';
    const res = await API.get('/', {
      headers: { Authorization: `Bearer ${token}` } // si tu utilises JWT
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
