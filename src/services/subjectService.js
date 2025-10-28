import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/subjects";

export const getSubjects = () => axios.get(API_URL).then(res => res.data);
export const getSubjectById = (id) => axios.get(`${API_URL}/${id}`).then(res => res.data);
export const addSubject = (subject) => axios.post(API_URL, subject).then(res => res.data);
export const updateSubject = (id, subject) => axios.put(`${API_URL}/${id}`, subject).then(res => res.data);
export const deleteSubject = (id) => axios.delete(`${API_URL}/${id}`).then(res => res.data);
