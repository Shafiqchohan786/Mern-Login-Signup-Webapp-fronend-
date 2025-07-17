import axios from "axios";

const API_BASE = "http://localhost:5000"; // Backend URL

export const signup = (data) => axios.post(`${API_BASE}/signup`, data);
export const login = (data) => axios.post(`${API_BASE}/login`, data);
