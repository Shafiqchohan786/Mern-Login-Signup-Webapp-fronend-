import axios from "axios";

const API_BASE = "https://mern-auth-api-liart.vercel.app/auth"; // ✅ Backend deployed URL

export const signup = (data) => axios.post(`${API_BASE}/signup`, data);
export const login = (data) => axios.post(`${API_BASE}/login`, data);
