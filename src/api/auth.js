const API_BASE = "https://webapp-backend-production-3131.up.railway.app/auth";

export const signup = (data) => axios.post(`${API_BASE}/signup`, data, { withCredentials: true });
export const login = (data) => axios.post(`${API_BASE}/login`, data, { withCredentials: true });

