// src/services/offerService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/offers";

export const getOffers = () => axios.get(API_URL).then(res => res.data);
export const getOfferById = (id) => axios.get(`${API_URL}/${id}`).then(res => res.data);
export const addOffer = (offer) => axios.post(API_URL, offer).then(res => res.data);
export const updateOffer = (id, offer) => axios.put(`${API_URL}/${id}`, offer).then(res => res.data);
export const deleteOffer = (id) => axios.delete(`${API_URL}/${id}`).then(res => res.data);
