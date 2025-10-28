// src/services/userService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getUsers = () => axios.get(API_URL).then(res => res.data);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`).then(res => res.data);
export const addUser = (user) => axios.post(API_URL, user).then(res => res.data);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user).then(res => res.data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
