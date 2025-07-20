const API_BASE = "https://4stack-registration-backend.zeabur.app/auth";

export const signup = (data) => axios.post(`${API_BASE}/signup`, data, { withCredentials: true });
export const login = (data) => axios.post(`${API_BASE}/login`, data, { withCredentials: true });

